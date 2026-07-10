import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", sm: "2rem", lg: "3rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      fontFamily: {
        // ── Display (headings) ──────────────────────────────
        sora: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        // ── Body ────────────────────────────────────────────
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // ── Monospace (code) ────────────────────────────────
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
        // ── Legacy aliases (for components not yet migrated) ─
        orbitron: ["Sora", "ui-sans-serif", "sans-serif"],
        poppins: ["Inter", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },
        // ── Extended palette ─────────────────────────────────
        neon: {
          blue:   "hsl(var(--indigo))",
          purple: "hsl(var(--violet))",
          green:  "hsl(var(--teal))",
          cyan:   "hsl(var(--teal-light))",
          pink:   "hsl(var(--rose))",
        },
        indigo: {
          DEFAULT: "hsl(var(--indigo))",
          light:   "hsl(var(--indigo-light))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          light:   "hsl(var(--teal-light))",
        },
        amber: { DEFAULT: "hsl(var(--amber))" },
        violet: { DEFAULT: "hsl(var(--violet))" },
        rose: { DEFAULT: "hsl(var(--rose))" },
      },
      backgroundImage: {
        "gradient-primary":   "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent":    "var(--gradient-accent)",
        "gradient-bg":        "var(--gradient-bg)",
        "gradient-hero":      "var(--gradient-hero)",
      },
      boxShadow: {
        "neon-blue":   "var(--glow-primary)",
        "neon-purple": "var(--glow-secondary)",
        "neon-green":  "var(--glow-accent)",
        "glass":       "var(--shadow-glass)",
        "card":        "0 4px 24px rgba(0,0,0,0.3)",
        "card-hover":  "0 8px 32px rgba(0,0,0,0.4), var(--glow-primary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 6px)",
      },
      spacing: {
        "section": "6rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 8px hsl(var(--primary) / 0.4)" },
          "50%":       { boxShadow: "0 0 24px hsl(var(--primary) / 0.7)" },
        },
        "gradient-shift": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-in-up": {
          "0%":   { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)",     opacity: "1" },
        },
        "slide-in-right": {
          "0%":   { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)",     opacity: "1" },
        },
        "fade-in": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { transform: "scale(0.94)", opacity: "0" },
          "100%": { transform: "scale(1)",    opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "loading-bar": {
          "0%":   { width: "0%" },
          "60%":  { width: "75%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        float:             "float 4s ease-in-out infinite",
        "glow-pulse":      "glow-pulse 2.5s ease-in-out infinite",
        "gradient-shift":  "gradient-shift 4s ease infinite",
        "slide-in-up":     "slide-in-up 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-in-right":  "slide-in-right 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in":         "fade-in 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        "scale-in":        "scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-up":         "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        shimmer:           "shimmer 2.5s linear infinite",
        "loading-bar":     "loading-bar 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
