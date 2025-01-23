/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        urbanBlack: '#121212',
        neonBlue: '#00eaff',
        neonPink: '#ff007f',
        yellow: '#ffc700',
      },
      gradientColorStops: {
        neonBlue: '#00eaff',
        neonPink: '#ff007f',
        yellow: '#ffc700',
      },
    },
  },
  plugins: [],
};
