// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        "primary": "#010067",
        "secondary": "#001532",
        "container": "#eeeeee",
        "sun": "#FFE600",
      },

      fontSize: {
        "2xs": ["10px", "14px"],
        "3xs": ["8px", "12px"],
      },
      spacing: {
        8: "2.15rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        34: "8.5rem",
        38: "9.5rem",
        37: "9.2rem",
        42: "10.5rem",
        70: "17.5rem",
        100: "28rem",
      },
    },
  },
  variants: {},
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        
    ],
};
