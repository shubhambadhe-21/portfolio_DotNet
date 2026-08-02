import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0D12",
          900: "#0F141B",
          800: "#141B24",
          700: "#1B2430",
          600: "#28323F",
          500: "#3A4654",
          400: "#5C6C7D",
          300: "#8B98A6",
          200: "#B8C2CC",
          100: "#DDE3E8",
          50: "#F2F4F6",
        },
        paper: {
          DEFAULT: "#F2F4F6",
          panel: "#FFFFFF",
          line: "#D7DDE3",
        },
        amber: {
          DEFAULT: "#D98E3F",
          light: "#F0AC5F",
          dark: "#B06F28",
        },
        signal: {
          cyan: "#4F9DDE",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(10,13,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,13,18,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
