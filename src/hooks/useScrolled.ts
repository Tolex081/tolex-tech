import { useEffect, useState } from "react";

/** Tracks whether the page has scrolled past `offset`, using a passive listener. */
export const useScrolled = (offset = 50) => {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > offset
  );

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > offset);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [offset]);

  return scrolled;
};
