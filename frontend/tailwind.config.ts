import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover:   "#1d4ed8",
          muted:   "#1e3a8a",
          subtle:  "#172554",
        },
        surface: {
          base:    "#0A0A0B", // zinc-950 equivalent
          raised:  "#111113", // zinc-900 equivalent
          border:  "#27272a", // zinc-800 equivalent
        },
        status: {
          available: "#a3e635", // lime-400
        },
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        sans:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // modular scale, 1.25 ratio, base 16px
        xs:   ["0.75rem",  { lineHeight: "1rem" }],
        sm:   ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem",     { lineHeight: "1.75rem" }],
        lg:   ["1.25rem",  { lineHeight: "1.75rem" }],
        xl:   ["1.563rem", { lineHeight: "2rem" }],
        "2xl":["1.953rem", { lineHeight: "2.25rem" }],
        "3xl":["2.441rem", { lineHeight: "2.75rem" }],
        "4xl":["3.052rem", { lineHeight: "3.25rem" }],
        "5xl":["3.815rem", { lineHeight: "1.1" }],
        "6xl":["4.768rem", { lineHeight: "1.05" }],
      },
      spacing: {
        // 8px base unit — all spacing is a multiple of 8
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card:  "0 1px 3px 0 rgba(0,0,0,0.4), 0 1px 2px -1px rgba(0,0,0,0.4)",
        modal: "0 25px 50px -12px rgba(0,0,0,0.8)",
        glow:  "0 0 40px -8px rgba(124,92,255,0.4)",
      },
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0,0,0.2,1) infinite",
      },
      backgroundImage: {
        "grid-blue":
          "linear-gradient(rgba(124,92,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
    },
  },
  plugins: [],
} satisfies Config;