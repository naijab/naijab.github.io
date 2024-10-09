/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF204E",
        secondary: "#070F2B",
        third: "#3662FB",
        highlight: "#FBA834",
        purple: "#B04AFF",
        darkBlack: "#151515",
      },
      fontFamily: {
        thai: ["Noto Sans Thai Looped", "sans-serif"],
        eng: ["Inconsolata", "monospace"],
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
