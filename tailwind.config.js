module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: "#0F382C",
          800: "#154a3b",
          700: "#1d6350",
          100: "#e6f0ed",
        },
        burgundy: {
          950: "#3d0c15",
          900: "#5C1323",
          800: "#7a1c30",
          100: "#f9eaed",
        },
        gold: {
          200: "#F3E5AB",
          300: "#E5D08F",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#AA8236",
        },
        cream: "#FDFBF7",
        charcoal: "#1E2421",
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        script: ["Alex Brush", "cursive"],
      },
    },
  },
  plugins: [],
};
