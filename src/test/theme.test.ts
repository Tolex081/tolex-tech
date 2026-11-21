import { describe, it, expect, beforeEach } from "vitest";
import { applyTheme, DEFAULT_MODE, isMode, readStored, writeStored } from "@/lib/theme";

describe("default mode", () => {
  it("starts every visitor in light", () => {
    expect(DEFAULT_MODE).toBe("light");
  });
});

describe("theme validation", () => {
  it("rejects values that are not real modes", () => {
    expect(isMode("dark")).toBe(true);
    expect(isMode("light")).toBe(true);
    // A corrupted localStorage value used to be cast straight onto <html>.
    expect(isMode("banana")).toBe(false);
    expect(isMode(null)).toBe(false);
  });
});

describe("applyTheme", () => {
  beforeEach(() => {
    document.documentElement.className = "";
  });

  it("sets exactly one mode class", () => {
    applyTheme("dark");
    applyTheme("light");

    const classes = [...document.documentElement.classList];
    expect(classes).toContain("light");
    expect(classes).not.toContain("dark");
  });

  it("keeps colorScheme in sync so form controls match", () => {
    applyTheme("light");
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
