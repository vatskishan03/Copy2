module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: {
          900: "#050d15",
          "900_01": "#040d14",
          "900_03": "#000000",
          "900_02": "#030118",
        },
        blue_gray: {
          100: "#d9d9d9",
        },
        white: {
          A700: "#ffffff",
        },
      },
      boxShadow: {},
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
