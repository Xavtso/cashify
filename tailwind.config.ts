import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hero: "0.5px 2px 2px 0.5px var(--blue-lighter)",
        base: "0px 0px 1px 1px var(--blue-lighter)",
      },
    },
  },
  plugins: [],
};
export default config;
