import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#3b4eff",
        primary: "#b3ec11",
      },
      fontFamily: {
        geist: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        pp: "var(--font-pp-mori)",
      },
    },
  },
  plugins: [],
} satisfies Config
