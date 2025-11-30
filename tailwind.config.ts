import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6600",
          light: "#FFAE4D",
          dark: "#E65C00",
        },
        orange: {
          DEFAULT: "#FF6600",
          light: "#FFAE4D",
        },
        gray: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
