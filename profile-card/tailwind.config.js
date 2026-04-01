/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0571ED",
        cta: {
          primary: "#1F242F",
          secondary: "#6B7387",
          tertiary: "#AFB7CD"
        }
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}

