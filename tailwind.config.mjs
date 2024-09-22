/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#e0f8fa",  // Very light version of your blue
        100: "#b3eef4", // Lighter version for lighter accents
        400: "#0fc4d7", // Your primary blue color
        500: "#0ca5b3", // Slightly darker version for stronger accents
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#0bb2cf", // Brighter, more vibrant blue for replacing lighter orange tones
        200: "#0994ab", // Brighter blue for stronger accents
        300: "#077985", // Brighter shade for buttons and links
        400: "#05666f", // Brighter color for buttons, icons, and links
        500: "#04545a", // Brighter primary shade
        600: "#033d42", // Brighter and slightly more visible dark tone for buttons and icons

      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
