/*
 * Bakes the sky's three cloud planes into WebP strips (src/assets/sky/).
 *
 *   node scripts/render-sky.mjs
 *
 * The clouds are drawn as SVG (cumulus puffs roughened by stitched fractal
 * noise, then blurred) and rendered once here in headless Chrome, at a modest
 * resolution: they are soft, so the browser can scale them up for free. Live
 * SVG filters on strips several screens wide froze phones (hundreds of MB of
 * layer memory, re-filtered as they drifted); a baked strip is one small
 * texture the compositor just slides.
 *
 * Each strip is three identical tiles wide and periodic in one tile, so
 * sliding it left by a third loops without a seam. Rendered once per theme.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src", "assets", "sky");

/** Width of one tile, in SVG user units. */
const TILE = 1440;
/** Tiles per strip: the window must fit in the other two after a one-tile slide. */
const TILES = 3;

/** A cumulus: puffs heaped on a wide, flattened base. */
const cumulus = (x, y, s) => [
  [x, y, 70 * s],
  [x + 80 * s, y - 40 * s, 95 * s],
  [x + 190 * s, y - 20 * s, 80 * s],
  [x + 270 * s, y + 15 * s, 55 * s],
  [x - 70 * s, y + 20 * s, 50 * s],
];

const circles = (puffs) => puffs.map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`).join("");
const ellipses = (wisps) =>
  wisps.map(([cx, cy, rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`).join("");

const planes = [
  {
    name: "far",
    height: 1400,
    freq: 0.012,
    scale: 70,
    blur: 14,
    outHeight: 760,
    art: circles([
      ...cumulus(140, 260, 0.9),
      ...cumulus(980, 160, 1.1),
      ...cumulus(620, 760, 0.8),
      ...cumulus(1260, 980, 1),
      ...cumulus(80, 1180, 0.85),
    ]),
  },
  {
    name: "mid",
    height: 1900,
    freq: 0.009,
    scale: 90,
    blur: 7,
    outHeight: 960,
    art: circles([
      ...cumulus(1060, 420, 1.2),
      ...cumulus(-60, 820, 1.1),
      ...cumulus(820, 1320, 1.3),
      ...cumulus(300, 1700, 1),
    ]),
  },
  {
    name: "near",
    height: 2500,
    freq: 0.02,
    scale: 40,
    blur: 10,
    outHeight: 1000,
    art: ellipses([
      [260, 640, 420, 26],
      [1180, 1120, 380, 22],
      [520, 1720, 460, 30],
      [1100, 2260, 400, 24],
    ]),
  },
];

/** --cloud in each theme (src/index.css). */
const colors = { light: "hsl(0 0% 100%)", dark: "hsl(220 35% 78%)" };

const svgFor = ({ height, freq, scale, blur, art }, fill) => {
  const pad = 300;
  const uses = Array.from({ length: TILES + 2 }, (_, k) => `<use href="#t" x="${(k - 1) * TILE}"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE * TILES}" height="${height}" viewBox="0 0 ${TILE * TILES} ${height}" style="fill:${fill}">
<defs><g id="t">${art}</g>
<filter id="f" filterUnits="userSpaceOnUse" x="${-TILE}" y="${-pad}" width="${TILE * (TILES + 2)}" height="${height + pad * 2}">
<feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="4" seed="7" stitchTiles="stitch" x="0" y="${-pad}" width="${TILE}" height="${height + pad * 2}" result="tn"/>
<feTile in="tn" result="n"/>
<feDisplacementMap in="SourceGraphic" in2="n" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="b"/>
<feGaussianBlur in="b" stdDeviation="${blur}"/>
</filter></defs>
<g filter="url(#f)">${uses}</g></svg>`;
};

const jobs = planes.flatMap((plane) =>
  Object.entries(colors).map(([theme, fill]) => ({
    file: `${plane.name}-${theme}.webp`,
    svg: svgFor(plane, fill),
    w: Math.round((TILE * TILES * plane.outHeight) / plane.height),
    h: plane.outHeight,
  }))
);

const page = `<!doctype html><meta charset="utf-8"><body><script>
(async () => {
  const jobs = ${JSON.stringify(jobs)};
  for (const job of jobs) {
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(job.svg);
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = job.w;
    canvas.height = job.h;
    canvas.getContext("2d").drawImage(img, 0, 0, job.w, job.h);
    const pre = document.createElement("pre");
    pre.dataset.file = job.file;
    pre.textContent = canvas.toDataURL("image/webp", 0.82);
    document.body.append(pre);
  }
  document.body.dataset.done = "1";
})();
</script>`;

const chrome = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((path) => existsSync(path));
if (!chrome) throw new Error("No Chrome or Edge found to render the sky.");

const work = mkdtempSync(join(tmpdir(), "sky-"));
try {
  const html = join(work, "sky.html");
  writeFileSync(html, page);
  const dom = execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      `--user-data-dir=${join(work, "profile")}`,
      "--virtual-time-budget=30000",
      "--dump-dom",
      pathToFileURL(html).href,
    ],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
  );
  if (!dom.includes('data-done="1"')) throw new Error("Rendering did not finish.");

  mkdirSync(outDir, { recursive: true });
  for (const [, file, b64] of dom.matchAll(/<pre data-file="([^"]+)">data:image\/webp;base64,([^<]+)<\/pre>/g)) {
    const bytes = Buffer.from(b64, "base64");
    writeFileSync(join(outDir, file), bytes);
    console.log(`${file}  ${(bytes.length / 1024).toFixed(1)} kB`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
