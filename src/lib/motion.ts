/** True when the visitor has asked their OS to reduce motion. */
export const prefersReducedMotion = () => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/** Scrolls to a section, respecting the reduced-motion preference. */
export const scrollToSection = (hash: string) => {
  const element = document.querySelector(hash);
  if (!element) return;
  element.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
};
