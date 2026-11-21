/*
 * The site has one colour theme drawn in two lights. Only the mode is a
 * choice; the old teal / purple / amber palettes are gone.
 */
export const MODES = ["dark", "light"] as const;

export type Mode = (typeof MODES)[number];

export const MODE_KEY = "theme-mode";
/** Left over from the multi-palette version; cleared on load. */
export const LEGACY_COLOR_KEY = "color-theme";

export const isMode = (value: unknown): value is Mode =>
  typeof value === "string" && (MODES as readonly string[]).includes(value);

/** localStorage throws in some privacy modes, so every access is guarded. */
export const readStored = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeStored = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — the theme still applies for this session */
  }
};

export const removeStored = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* nothing to clean up */
  }
};

/** Every visitor starts in light until they choose dark themselves. */
export const DEFAULT_MODE: Mode = "light";

export const THEME_COLORS: Record<Mode, string> = {
  light: "#eaf1f8",
  dark: "#0d1422",
};

export const applyTheme = (mode: Mode) => {
  const root = document.documentElement;
  root.classList.remove(...MODES);
  root.classList.add(mode);
  root.style.colorScheme = mode;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[mode]);
};
