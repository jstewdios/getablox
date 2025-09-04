import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0b7db0"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(14,165,233,0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
