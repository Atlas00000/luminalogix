import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
        mono: ["Sora", "monospace"],
      },
      colors: {
        clay: "#BCAAA4",
        olive: "#8A9A5B",
        charcoal: "#2E2E2E",
        sky: "#B0D0D3",
        accent: "#A5E887",
        brand: {
          light: "#f9f8f7",
          dark: "#111111",
        },
      },
      // other theme extensions...
    },
  },
  plugins: [],
};
export default config;
