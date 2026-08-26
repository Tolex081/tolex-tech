import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { colorThemeOptions } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface Props {
  /** Compact sizing for the mobile header. */
  compact?: boolean;
}

const ThemeControls = ({ compact = false }: Props) => {
  const { mode, colorTheme, toggleMode, setColorTheme } = useTheme();
  const [showPalette, setShowPalette] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape and on any click outside the palette.
  useEffect(() => {
    if (!showPalette) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowPalette(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setShowPalette(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [showPalette]);

  const buttonSize = compact ? "w-9 h-9" : "w-10 h-10";
  const iconSize = compact ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleMode}
        className={cn(
          buttonSize,
          "rounded-full glass flex items-center justify-center transition-colors duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
        )}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? (
          <Sun className={cn(iconSize, "text-foreground group-hover:text-primary-strong transition-colors")} />
        ) : (
          <Moon className={cn(iconSize, "text-foreground group-hover:text-primary-strong transition-colors")} />
        )}
      </button>

      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => setShowPalette((open) => !open)}
          className={cn(
            buttonSize,
            "rounded-full glass flex items-center justify-center transition-colors duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
          )}
          aria-label="Change color theme"
          aria-expanded={showPalette}
          aria-haspopup="menu"
        >
          <Palette className={cn(iconSize, "text-foreground group-hover:text-primary-strong transition-colors")} />
        </button>

        {showPalette && (
          <div
            role="menu"
            aria-label="Color theme"
            className="absolute top-full right-0 mt-2 p-3 glass-strong rounded-xl z-50 animate-fade-in"
          >
            <div className="flex flex-col gap-2 min-w-[140px]">
              <span className="text-xs text-muted-foreground font-medium mb-1">Color Theme</span>
              {colorThemeOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={colorTheme === option.id}
                  onClick={() => {
                    setColorTheme(option.id);
                    setShowPalette(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    colorTheme === option.id
                      ? "bg-primary/20 text-primary-strong"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "w-4 h-4 rounded-full ring-2 ring-offset-2 ring-offset-card",
                      option.swatch,
                      colorTheme === option.id ? "ring-primary" : "ring-transparent"
                    )}
                  />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeControls;
