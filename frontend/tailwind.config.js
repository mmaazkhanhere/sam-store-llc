/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      merriweather: "Merriweather, serif",
      playfair: "'Playfair Display', serif",
      quickSand: "'Quicksand, sans-serif",
    },
    extend: {
      backgroundImage: {
        shopping:
          'url("https://images.pexels.com/photos/3865930/pexels-photo-3865930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      },
    },
  },
  plugins: [],
};
