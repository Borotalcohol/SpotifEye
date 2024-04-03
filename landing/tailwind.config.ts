import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        accent: "0 0 30px 5px rgba(30, 215, 96, 0.05)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        avenir: ["var(--font-avenirltstd)"],
        gotham: ["var(--font-gotham)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#1ED760",
        purple: "#E6A9FB",
        ochre: "#FBE9A9",
        gray: "#2D2D2D",
        "dark-gray": "#212121",
        "darkest-gray": "#131313",
      },
    },
  },
  plugins: [],
};
export default config;