export const COLOR_THEMES = ["teal", "purple", "amber"] as const;
export const MODES = ["dark", "light"] as const;

export type ColorTheme = (typeof COLOR_THEMES)[number];
export type Mode = (typeof MODES)[number];

export const MODE_KEY = "theme-mode";
export const COLOR_KEY = "color-theme";

export const DEFAULT_COLOR_THEME: ColorTheme = "teal";

export const colorThemeOptions: { id: ColorTheme; label: string; swatch: string }[] = [
  { id: "teal", label: "Teal", swatch: "bg-[hsl(174,72%,50%)]" },
  { id: "purple", label: "Purple", swatch: "bg-[hsl(270,70%,55%)]" },
  { id: "amber", label: "Amber", swatch: "bg-[hsl(38,92%,50%)]" },
];

export const isMode = (value: unknown): value is Mode =>
  typeof value === "string" && (MODES as readonly string[]).includes(value);

export const isColorTheme = (value: unknown): value is ColorTheme =>
  typeof value === "string" && (COLOR_THEMES as readonly string[]).includes(value);

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

/** Falls back to the OS preference rather than assuming dark. */
export const systemMode = (): Mode => {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

export const applyTheme = (mode: Mode, colorTheme: ColorTheme) => {
  const root = document.documentElement;
  root.classList.remove(...MODES);
  root.classList.remove(...COLOR_THEMES.map((theme) => `theme-${theme}`));
  root.classList.add(mode, `theme-${colorTheme}`);
  root.style.colorScheme = mode;
};
