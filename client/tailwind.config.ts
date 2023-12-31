import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#D4EAF7",
        200: "#B6CCD8",
        300: "#3B3C3D",
      },
      accent: {
        100: "#71C4EF",
        200: "#00668C",
      },
      text: {
        100: "#1D1C1C",
        200: "#313D44",
      },
      bg: {
        100: "#FFFEFB",
        200: "#F5F4F1",
        300: "#CCCBC8",
      },
      error: "#FF6348",
      warning: "#FFC107",
      success: "#4CAF50",
      info: "#3498DB",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
export default config;
