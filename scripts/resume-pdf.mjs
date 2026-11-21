/**
 * Cuts public/resume.pdf from the /resume page.
 *
 * Builds the site, serves dist/ with Vite's preview server, and prints
 * /resume to PDF with a headless Chromium (Edge or Chrome). Set CHROME_PATH
 * to point at a browser somewhere unusual.
 *
 *   npm run resume:pdf
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { preview } from "vite";

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("No Chrome or Edge found. Set CHROME_PATH to a Chromium-based browser.");
  process.exit(1);
}

const out = resolve("public/resume.pdf");
// A throwaway profile, so a browser you already have open can't swallow the headless run.
const profile = mkdtempSync(join(tmpdir(), "resume-pdf-"));
const server = await preview({ preview: { port: 4179, strictPort: true, open: false } });

try {
  // Async on purpose: a sync spawn would block this process, and with it the preview server being printed.
  await promisify(execFile)(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=8000",
      `--print-to-pdf=${out}`,
      "http://localhost:4179/resume",
    ],
    { timeout: 90_000 }
  );
  console.log(`Wrote ${out}`);
} finally {
  await server.close();
  rmSync(profile, { recursive: true, force: true, maxRetries: 3 });
}
