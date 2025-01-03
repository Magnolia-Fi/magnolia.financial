/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tree: "url('./src/assets/tree-roots.png')",
        contactBG: "url('./src/assets/contact-bg.png')",
      },
      fontFamily: {
        inria: ["Inria Serif", "serif"],
        "aktiv-grotesk": ["aktiv-grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
