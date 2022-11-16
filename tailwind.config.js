/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-header-icon":
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
      },
      colors: {
        'card-light': "#737BAE",
        'profit': "#00FFA3",
        'loss': "#FF4D4D"
      }
    },
  },
  plugins: [],
};
