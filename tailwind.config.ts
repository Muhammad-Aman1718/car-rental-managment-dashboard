import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#A162F7",
        background: "#F5F5F5",
        hover: "#F3F5F8",
        search: "#F5F4F6",
        text: "#5F6165",
      },
    },
  },
  plugins: [],
} satisfies Config;
