import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  applyTheme,
  DEFAULT_MODE,
  isMode,
  LEGACY_COLOR_KEY,
  MODE_KEY,
  readStored,
  removeStored,
  writeStored,
  type Mode,
} from "@/lib/theme";

export type { Mode };

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
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
  // Light by default; a visitor's own choice is remembered and wins.
  const [mode, setModeState] = useState<Mode>(() => {
    const stored = readStored(MODE_KEY);
    return isMode(stored) ? stored : DEFAULT_MODE;
  });
  // Only remember the mode once the visitor actually picks one.
  const [chosen, setChosen] = useState(() => isMode(readStored(MODE_KEY)));

  useEffect(() => {
    removeStored(LEGACY_COLOR_KEY);
  }, []);

  useEffect(() => {
    applyTheme(mode);
    if (chosen) writeStored(MODE_KEY, mode);
  }, [mode, chosen]);

  const setMode = useCallback((next: Mode) => {
    setChosen(true);
    setModeState(next);
  }, []);

  const toggleMode = useCallback(() => {
    setChosen(true);
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>{children}</ThemeContext.Provider>
  );
};
