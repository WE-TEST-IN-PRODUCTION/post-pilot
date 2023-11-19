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
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        "fun-blue": {
          "50": "#f2f7fd",
          "100": "#e5edf9",
          "200": "#c5d9f2",
          "300": "#92b9e7",
          "400": "#5894d8",
          "500": "#3276c5",
          "600": "#225ba5",
          "700": "#1d4987",
          "800": "#1c4070",
          "900": "#1c375e",
          "950": "#13233e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
