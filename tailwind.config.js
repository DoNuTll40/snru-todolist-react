/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      itim: ['Itim', 'sans-serif'],
      notothai: ['Noto Sans Thai', 'sans-serif'],
      prompt: ['Prompt', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'light': '2px 2px 5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'pink-a': '#F675A8',
        'pink-b': '#FF90BC',
        'pink-c': '#FFC0D9',
        'yellow-l': '#F9F9E0',
        'blue-l': '#8ACDD7',
        'purple-a': '#554994',
        'peach-a': '#F29393',
        'peach-b': '#FFCCB3',
        'brown-text': '#5D534A',
      },
    }
  },
  plugins: [],
}

