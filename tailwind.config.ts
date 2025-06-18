import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sf: ['var(--font-sf)', 'sans-serif'],
        clash: ["ClashDisplay-Bold", "sans-serif"],
        eurostile: ["EurostileExtendedBlack", "sans-serif"],
      },
       backgroundImage: {
        abouthero: "url('/ff-hero-img.png')",
        bb: "url('/bb.png')",
        // grid: "url('/grid.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
