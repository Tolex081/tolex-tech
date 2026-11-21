import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/*
 * The sky behind the whole page, in three planes like a multiplane camera:
 * far haze, middle cloud and a near wisp. Clouds are drawn as cumulus forms
 * (overlapping puffs on a flatter base) and roughened by fractal noise, so
 * they read as weather rather than as blurred blobs.
 *
 * The page's one scroll animation: as the visitor reads down, they descend
 * through the sky. The planes rise past at three different rates and the
 * horizon haze warms in toward the contact section at the foot of the page.
 * Reduced motion holds a still sky with the haze half in.
 *
 * Apart from the scroll, the weather moves on its own: each plane drifts
 * sideways on a slow loop, the far haze slowest and the near wisps fastest,
 * so the sky is never a still picture. That drift runs on the compositor
 * (a CSS transform on each plane's strip) and stops under reduced motion.
 */

type Puff = [cx: number, cy: number, r: number];

/** A cumulus: puffs heaped on a wide, flattened base. */
const cumulus = (x: number, y: number, s: number): Puff[] => [
  [x, y, 70 * s],
  [x + 80 * s, y - 40 * s, 95 * s],
  [x + 190 * s, y - 20 * s, 80 * s],
  [x + 270 * s, y + 15 * s, 55 * s],
  [x - 70 * s, y + 20 * s, 50 * s],
];

const FAR: Puff[] = [
  ...cumulus(140, 260, 0.9),
  ...cumulus(980, 160, 1.1),
  ...cumulus(620, 760, 0.8),
  ...cumulus(1260, 980, 1),
  ...cumulus(80, 1180, 0.85),
];

const MID: Puff[] = [
  ...cumulus(1060, 420, 1.2),
  ...cumulus(-60, 820, 1.1),
  ...cumulus(820, 1320, 1.3),
  ...cumulus(300, 1700, 1),
];

/** Wisps: long, thin, low-opacity streaks, the nearest layer. */
const WISPS: [cx: number, cy: number, rx: number, ry: number][] = [
  [260, 640, 420, 26],
  [1180, 1120, 380, 22],
  [520, 1720, 460, 30],
  [1100, 2260, 400, 24],
];

/** Width of one tile of sky, in SVG user units. */
const TILE = 1440;
/**
 * Tiles laid side by side in each plane. The plane drifts left by exactly one
 * tile and loops, so the window must fit inside the other three: that holds
 * for any screen up to 32:9.
 */
const TILES = 4;

/**
 * One plane of cloud, drawn as a strip of identical tiles so it can drift
 * forever without a seam. The puffs are repeated a tile to each side and the
 * fractal noise is stitched to the tile width and repeated (feTile), so a
 * cloud crossing a tile edge billows the same on both sides.
 */
const Plane = ({
  id,
  height,
  freq,
  scale,
  blur,
  drift,
  phase,
  children,
}: {
  id: string;
  height: number;
  freq: number;
  scale: number;
  blur: number;
  /** Seconds to drift one tile. Nearer planes move faster. */
  drift: number;
  /** Where in the loop the plane starts, 0 to 1, so the planes never line up. */
  phase: number;
  children: React.ReactNode;
}) => {
  const pad = 300;
  return (
    <svg
      className="sky-drift h-full w-auto max-w-none"
      viewBox={`0 0 ${TILE * TILES} ${height}`}
      preserveAspectRatio="none"
      style={{
        aspectRatio: `${TILE * TILES} / ${height}`,
        fill: "hsl(var(--cloud))",
        animationDuration: `${drift}s`,
        animationDelay: `${-drift * phase}s`,
      }}
    >
      <defs>
        <g id={`${id}-tile`}>{children}</g>
        <filter
          id={id}
          filterUnits="userSpaceOnUse"
          x={-TILE}
          y={-pad}
          width={TILE * (TILES + 2)}
          height={height + pad * 2}
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={freq}
            numOctaves={4}
            seed={7}
            stitchTiles="stitch"
            x={0}
            y={-pad}
            width={TILE}
            height={height + pad * 2}
            result="tile-noise"
          />
          <feTile in="tile-noise" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={scale} xChannelSelector="R" yChannelSelector="G" result="billow" />
          <feGaussianBlur in="billow" stdDeviation={blur} />
        </filter>
      </defs>
      <g filter={`url(#${id})`}>
        {Array.from({ length: TILES + 2 }, (_, k) => (
          <use key={k} href={`#${id}-tile`} x={(k - 1) * TILE} />
        ))}
      </g>
    </svg>
  );
};

const Sky = () => {
  const farRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const nearRef = useRef<HTMLDivElement>(null);
  const hazeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const far = farRef.current;
    const mid = midRef.current;
    const near = nearRef.current;
    const haze = hazeRef.current;
    if (!far || !mid || !near || !haze) return;

    if (prefersReducedMotion()) {
      haze.style.opacity = "0.5";
      return;
    }

    const ctx = gsap.context(() => {
      const vh = () => window.innerHeight;
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: { start: 0, end: "max", scrub: 0.6, invalidateOnRefresh: true },
        })
        .to(far, { y: () => -vh() * 0.18 }, 0)
        .to(mid, { y: () => -vh() * 0.55 }, 0)
        .to(near, { y: () => -vh() * 1.25 }, 0)
        .fromTo(haze, { opacity: 0 }, { opacity: 1, ease: "power2.in" }, 0);
    });

    /* Page height shifts as fonts and content settle; re-measure the end. */
    let timer = 0;
    let last = document.body.offsetHeight;
    const observer = new ResizeObserver(() => {
      if (document.body.offsetHeight === last) return;
      last = document.body.offsetHeight;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const plane = "absolute inset-x-0 top-0 motion-safe:will-change-transform";

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--sky-top)),hsl(var(--background))_60%)]" />

      <div ref={farRef} className={`${plane} h-[150vh] opacity-60 dark:opacity-[0.16]`}>
        <Plane id="cloud-far" height={1400} freq={0.012} scale={70} blur={14} drift={210} phase={0.35}>
          {FAR.map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} />
          ))}
        </Plane>
      </div>

      <div ref={midRef} className={`${plane} h-[190vh] opacity-90 dark:opacity-[0.2]`}>
        <Plane id="cloud-mid" height={1900} freq={0.009} scale={90} blur={7} drift={135} phase={0.7}>
          {MID.map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} />
          ))}
        </Plane>
      </div>

      <div ref={nearRef} className={`${plane} h-[250vh] opacity-50 dark:opacity-[0.12]`}>
        <Plane id="cloud-near" height={2500} freq={0.02} scale={40} blur={10} drift={80} phase={0.1}>
          {WISPS.map(([cx, cy, rx, ry], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} />
          ))}
        </Plane>
      </div>

      <div
        ref={hazeRef}
        className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--horizon))_0%,hsl(var(--horizon)/0.7)_35%,hsl(var(--horizon)/0)_75%)] opacity-0"
      />
    </div>
  );
};

export default Sky;
