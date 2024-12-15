/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      "sm": "640px",
      "md": '768px'
    },
    fontFamily: {
      primary: "var(--font-notoSansJp)",
    },

    extend: {
      colors: {
        primary: "#D9DADB",
        secondary: "#e5e5e5",
        accent : "#58cc02",
        accent2 : "#89e219",
        accent1: "#565656",
        bg: "#ffffff",
        platinum: "#afafaf",
        eel : "#4B4B4B",
        macaw: "#1cb0f6",
        accent3 : "#60a518",
        orange: "#ff5733",
        red: " #C70039",
        pur: "#a100f1"
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },


      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}