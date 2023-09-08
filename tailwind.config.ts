import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)"],
        mono: ["var(--font-vazir)"],
      },
    },
  },
  daisyui: { themes: ["bumblebee"] },

  plugins: [require("daisyui")],
};
export default config;
