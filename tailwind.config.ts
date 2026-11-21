import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Schibsted Grotesk Variable'", "'Schibsted Grotesk'", "system-ui", "sans-serif"],
        serif: ["'Bodoni Moda Variable'", "'Bodoni Moda'", "Didot", "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        faint: "hsl(var(--faint))",
        plate: "hsl(var(--plate))",
        horizon: "hsl(var(--horizon))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.5rem)",
        sm: "calc(var(--radius) - 0.75rem)",
        plate: "var(--radius)",
      },
      boxShadow: {
        /* Daylight from above: a tight contact shadow plus a long soft fall. */
        plate:
          "0 1px 2px hsl(var(--shadow) / 0.06), 0 18px 40px -18px hsl(var(--shadow) / 0.28)",
        lift:
          "0 2px 4px hsl(var(--shadow) / 0.08), 0 24px 48px -16px hsl(var(--shadow) / 0.36)",
      },
      maxWidth: {
        measure: "65ch",
        page: "76rem",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
