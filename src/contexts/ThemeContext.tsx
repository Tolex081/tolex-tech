import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  applyTheme,
  COLOR_KEY,
  DEFAULT_COLOR_THEME,
  isColorTheme,
  isMode,
  MODE_KEY,
  readStored,
  systemMode,
  writeStored,
  type ColorTheme,
  type Mode,
} from "@/lib/theme";

export type { ColorTheme, Mode };

interface ThemeContextType {
  mode: Mode;
  colorTheme: ColorTheme;
  setMode: (mode: Mode) => void;
  setColorTheme: (theme: ColorTheme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>(() => {
    const stored = readStored(MODE_KEY);
    return isMode(stored) ? stored : systemMode();
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const stored = readStored(COLOR_KEY);
    return isColorTheme(stored) ? stored : DEFAULT_COLOR_THEME;
  });

  useEffect(() => {
    writeStored(MODE_KEY, mode);
    writeStored(COLOR_KEY, colorTheme);
    applyTheme(mode, colorTheme);
  }, [mode, colorTheme]);

  // Follow the OS until the visitor makes an explicit choice.
  useEffect(() => {
    if (isMode(readStored(MODE_KEY))) return;
    if (!window.matchMedia) return;

    const query = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => setMode(event.matches ? "light" : "dark");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggleMode = useCallback(
    () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider
      value={{ mode, colorTheme, setMode, setColorTheme, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
