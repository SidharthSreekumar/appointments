/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'dark-mode',
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-primeui")],
};

