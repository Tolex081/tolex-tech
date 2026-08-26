import { describe, it, expect, beforeEach } from "vitest";
import {
  applyTheme,
  isColorTheme,
  isMode,
  readStored,
  writeStored,
} from "@/lib/theme";

describe("theme validation", () => {
  it("rejects values that are not real modes", () => {
    expect(isMode("dark")).toBe(true);
    expect(isMode("light")).toBe(true);
    // A corrupted localStorage value used to be cast straight onto <html>.
    expect(isMode("banana")).toBe(false);
    expect(isMode(null)).toBe(false);
  });

  it("rejects values that are not real color themes", () => {
    expect(isColorTheme("teal")).toBe(true);
    expect(isColorTheme("theme-teal")).toBe(false);
    expect(isColorTheme(undefined)).toBe(false);
  });
});

describe("applyTheme", () => {
  beforeEach(() => {
    document.documentElement.className = "";
  });

  it("sets exactly one mode and one color class", () => {
    applyTheme("dark", "teal");
    applyTheme("light", "purple");

    const classes = [...document.documentElement.classList];
    expect(classes).toContain("light");
    expect(classes).not.toContain("dark");
    expect(classes).toContain("theme-purple");
    expect(classes.filter((c) => c.startsWith("theme-"))).toHaveLength(1);
  });

  it("keeps colorScheme in sync so form controls match", () => {
    applyTheme("light", "amber");
    expect(document.documentElement.style.colorScheme).toBe("light");
  });
});

describe("guarded storage", () => {
  it("returns null instead of throwing when storage is unavailable", () => {
    const original = window.localStorage.getItem;
    // Simulate Safari private mode.
    window.localStorage.getItem = () => {
      throw new Error("SecurityError");
    };
    expect(readStored("theme-mode")).toBeNull();
    window.localStorage.getItem = original;
  });

  it("round-trips a value when storage works", () => {
    writeStored("theme-mode", "light");
    expect(readStored("theme-mode")).toBe("light");
  });
});
