/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto'],
    },
    extend: {
      colors: {
        'red-base': '#ef313f',
        'white-bg': '#fefdfd',
        'grad-white': '#f1f1f1',
        'grad-pink': '#ffe7e7',
      },
    },
  },
  plugins: [],
}

