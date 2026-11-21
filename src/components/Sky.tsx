import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import farDark from "@/assets/sky/far-dark.webp";
import farLight from "@/assets/sky/far-light.webp";
import midDark from "@/assets/sky/mid-dark.webp";
import midLight from "@/assets/sky/mid-light.webp";
import nearDark from "@/assets/sky/near-dark.webp";
import nearLight from "@/assets/sky/near-light.webp";
import { useTheme } from "@/contexts/ThemeContext";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/*
 * The sky behind the whole page, in three planes like a multiplane camera:
 * far haze, middle cloud and a near wisp. Clouds are cumulus forms (puffs on
 * a flatter base) roughened by fractal noise, so they read as weather rather
 * than as blurred blobs.
 *
 * The page's one scroll animation: as the visitor reads down, they descend
 * through the sky. The planes rise past at three different rates and the
 * horizon haze warms in toward the contact section at the foot of the page.
 * Reduced motion holds a still sky with the haze half in.
 *
 * Apart from the scroll, each plane drifts sideways on a slow loop, the far
 * haze slowest and the near wisps fastest.
 *
 * The clouds are baked into WebP strips by scripts/render-sky.mjs (edit the
 * cloud shapes there). Live SVG filters on strips several screens wide froze
 * phones; a baked strip is one small texture the compositor just slides.
 * Each strip is three identical tiles, so sliding it a third loops seamlessly.
 */

interface PlaneProps {
  light: string;
  dark: string;
  /** Intrinsic size of the baked strip, so it lays out before it loads. */
  width: number;
  height: number;
  /** Seconds to drift one tile. Nearer planes move faster. */
  drift: number;
  /** Where in the loop the plane starts, 0 to 1, so the planes never line up. */
  phase: number;
}

/** Only the current theme's strip is rendered, so only it is downloaded. */
const Plane = ({ light, dark, width, height, drift, phase }: PlaneProps) => {
  const { mode } = useTheme();
  return (
    <img
      src={mode === "dark" ? dark : light}
      alt=""
      width={width}
      height={height}
      decoding="async"
      draggable={false}
      className="sky-drift h-full w-auto max-w-none select-none"
      style={{ animationDuration: `${drift}s`, animationDelay: `${-drift * phase}s` }}
    />
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
        <Plane light={farLight} dark={farDark} width={2345} height={760} drift={210} phase={0.35} />
      </div>

      <div ref={midRef} className={`${plane} h-[190vh] opacity-90 dark:opacity-[0.2]`}>
        <Plane light={midLight} dark={midDark} width={2183} height={960} drift={135} phase={0.7} />
      </div>

      <div ref={nearRef} className={`${plane} h-[250vh] opacity-50 dark:opacity-[0.12]`}>
        <Plane light={nearLight} dark={nearDark} width={1728} height={1000} drift={80} phase={0.1} />
      </div>

      <div
        ref={hazeRef}
        className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--horizon))_0%,hsl(var(--horizon)/0.7)_35%,hsl(var(--horizon)/0)_75%)] opacity-0"
      />
    </div>
  );
};

export default Sky;
