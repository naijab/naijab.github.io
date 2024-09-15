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
        highlight: "#FBA834",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
