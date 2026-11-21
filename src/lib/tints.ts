/**
 * The sky pigments: the light at each hour of the day the page passes
 * through. Values live in src/index.css (day and night); this maps names to
 * the classes that set them. Class names are written out in full so
 * Tailwind keeps them.
 */
export type Tint = "rose" | "cobalt" | "teal" | "coral" | "amber";

export const tintClass: Record<Tint, string> = {
  rose: "tint-rose",
  cobalt: "tint-cobalt",
  teal: "tint-teal",
  coral: "tint-coral",
  amber: "tint-amber",
};

/** Dawn at the top, dusk at contact. */
export const sectionTint: Record<string, Tint> = {
  home: "rose",
  about: "cobalt",
  skills: "teal",
  projects: "coral",
  contact: "amber",
};

/** Order for things that take turns, such as project plates and index rows. */
export const tintCycle: Tint[] = ["cobalt", "rose", "teal", "amber", "coral"];

export const cycleTint = (index: number, offset = 0): Tint =>
  tintCycle[(index + offset) % tintCycle.length];
