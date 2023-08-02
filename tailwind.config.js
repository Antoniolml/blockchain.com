/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["var(--font-neue)", ...fontFamily.sans],
      mono: ["var(--font-lilex)", ...fontFamily.mono],
    },
    keyframes: {
      jelly: {
        "0%,100%": { transform: "scale(1, 1)" },
        "25%": { transform: "scale(0.95, 1.05)" },
        "50%": { transform: "scale(1.05, 0.95)" },
        "75%": { transform: "scale(0.95, 1.05)" },
      },
    },
    animation: {
      jelly: "jelly 0.5s",
    },
    animationDuration: {
      1500: "1500ms",
      2000: "2000ms",
      2500: "2500ms",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
