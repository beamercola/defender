const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  corePlugins: { container: false },
  theme: {
    colors: {
      black: "#000",
      canvas: "#E5E5C3",
      green: "#009246",
      blue: "#0D0DCC",
      orange: "#F55926",
      red: "#FF1E24",
      yellow: "#FFFF00",
      white: "#fff",
    },
    fontFamily: {
      gothic: ["cstm_xprmntl_03regular", "serif"],
      serif: ["Times New Roman", "serif"],
      mono: ["monospace"],
      bureau: ["bureau-grot", "sans-serif"],
      "bureau-wide": ["bureau-grot-wide", "sans-serif"],
      snell: ["snellregular", "serif"],
      sans: ["franklin-gothic-atf", "sans-serif"],
    },
    extend: {
      borderColor: {
        DEFAULT: "#000",
      },
      borderWidth: {
        DEFAULT: "2px",
      },
      colors: {
        gray: {
          DEFAULT: "#96AFB5",
        },
      },
      height: {
        "50vh": "50vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#000",
            fontFamily: "franklin-gothic-atf",
            a: {
              color: "black",
              textDecoration: "underline",
            },
            h1: {
              fontWeight: 900,
              overflowWrap: "break-word",
            },
            h2: {
              fontWeight: 800,
            },
            h4: {
              fontWeight: 900,
              fontSize: 12,
            },
            h5: {
              fontFamily: "monospace",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
      textDecoration: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
