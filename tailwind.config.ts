import type { Config } from "tailwindcss";
import { blackA, mauve, violet, indigo, purple } from "@radix-ui/colors";

const config: Config = {
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
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
      },
    },
  },
  plugins: [],
};
export default config;
