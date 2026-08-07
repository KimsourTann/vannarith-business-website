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
        brand: {
          50: "#F1F7FC",
          100: "#DCEAF7",
          200: "#B3D3EE",
          300: "#7FB3E0",
          400: "#3D86C4",
          500: "#0F63AE",
          600: "#0B4F8C",
          700: "#0A3F70",
          800: "#0A2E52",
          900: "#071F38",
        },
        gold: {
          50: "#FBF3E4",
          100: "#F5E2BC",
          300: "#EABE6C",
          400: "#E8A33D",
          500: "#D48B22",
          600: "#B06F19",
        },
        sand: {
          50: "#FBFAF6",
          100: "#F5F2E9",
          200: "#ECE6D6",
        },
        ink: "#10233A",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circuit-dots":
          "radial-gradient(currentColor 1px, transparent 1px)",
      },
      backgroundSize: {
        "circuit-dots": "22px 22px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,46,82,0.06), 0 8px 24px -8px rgba(10,46,82,0.16)",
        panel: "0 20px 60px -20px rgba(10,46,82,0.35)",
      },
      transitionTimingFunction: {
        // gentle "ease-out-expo" style curve used across hover / reveal
        // animations so motion feels fluid rather than mechanical
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "pop-in": "popIn 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-up": "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 250ms ease-out both",
      },
      keyframes: {
        popIn: {
          "0%": {
            transform: "scale(0.92)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
