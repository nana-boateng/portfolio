module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia", "sans-serif"],
        quick: ["Quicksand", "serif"],
        lato: ["Lato", "mono"],
      },
      colors: {
        "blue-stone": {
          200: "#c5d7d8",
          300: "#a1bfc1",
          400: "#5b9093",
          500: "#156064",
          600: "#13565a",
          700: "#10484b",
          800: "#0d3a3c",
          900: "#0a2f31",
        },
        kumera: {
          200: "#e2d6c7",
          300: "#d0bda5",
          400: "#ac8c62",
          500: "#895b1e",
          600: "#7b521b",
          700: "#674417",
          800: "#523712",
          900: "#432d0f",
        },
        conifer: {
          200: "#f2ffd9",
          300: "#ebffc2",
          400: "#dbff94",
          500: "#ccff66",
          600: "#b8e65c",
          700: "#99bf4d",
          800: "#7a993d",
          900: "#647d32",
        },
        scampi: {
          200: "#d5d4e4",
          300: "#bcb9d3",
          400: "#8a85b2",
          500: "#585191",
          600: "#4f4983",
          700: "#423d6d",
          800: "#353157",
          900: "#2b2847",
        },
        bone: {
          200: "#f9f2ef",
          300: "#f5ebe5",
          400: "#eedbd2",
          500: "#e6ccbe",
          600: "#cfb8ab",
          700: "#ad998f",
          800: "#8a7a72",
          900: "#71645d",
        },
        "cerise-red": {
          200: "#fbd0d9",
          300: "#f8b3c2",
          400: "#f37b94",
          500: "#ee4266",
          600: "#d63b5c",
          700: "#b3324d",
          800: "#8f283d",
          900: "#752032",
        },
        spray: {
          200: "#dbfcff",
          300: "#c6faff",
          400: "#9bf7ff",
          500: "#70f3ff",
          600: "#65dbe6",
          700: "#54b6bf",
          800: "#439299",
          900: "#37777d",
        },
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "fade-in-left": "fade-in-left 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
