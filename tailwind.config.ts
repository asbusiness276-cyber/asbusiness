import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: "#090016",
          800: "#17042b",
          700: "#220742",
          500: "#5f3fd6"
        }
      }
    }
  },
  plugins: []
};

export default config;
