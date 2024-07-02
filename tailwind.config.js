/** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '144': '70rem',
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '93': '363px',
      },
      colors: {
        customGray: '#383f48',
      },
      inset: {
        '-29': '-113px',
      },
    },
  },
  plugins: [],
}