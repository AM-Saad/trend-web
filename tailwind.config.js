/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal"],
        default: ["var(--tajawal)", "system-ui", "sans-serif"],
      },
      // add background gradient color
      backgroundImage: (theme) => ({
        "gradient-radial":
          "linear-gradient(174deg, rgba(225, 42, 31, 0.75) 0%, rgba(255, 106, 1, 0.75) 100%)",
          "gradient-radial-2":
          "linear-gradient(0, #fff 0%, rgba(255, 255, 255, .9) 100%)",
      }),
      backgroundColor: {
        title:'#f9f9f9',
        brand: "#F67D49",
        paragraph:"#f9f9f9"
      },
      colors: {
        title:'#f9f9f9',
        brand: "#F67D49",
        paragraph:"#f9f9f9"
      },
      borderColor: {
        brand: "#F67D49",
        title:'#f9f9f9',
        paragraph:"#f9f9f9"
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
