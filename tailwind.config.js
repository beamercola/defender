const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      gothic: ["cstm_xprmntl_03regular", "serif"],
      serif: ["Times New Roman", "serif"],
      mono: ["monospace"],
      bureau: ["bureau-grot", "sans-serif"],
      "bureau-wide": ["bureau-grot-wide", "sans-serif"],
      snell: ["snellregular", "serif"],
    },
    extend: {
      borderColor: {
        default: "#000",
      },
      colors: {
        canvas: "#E5E5C3",
        green: "#009246",
        blue: "#0D0DCC",
        orange: "#F55926",
        red: "#FF1E24",
        yellow: "#FFFF00",
      },
      height: {
        "50vh": "50vh",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
