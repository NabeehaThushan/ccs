/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#F5F4F0',
        stone: '#ECEAE5',
        midtone: '#B8B4AC',
        nearblack: '#1C1C1A',
        accent: '#8C7355',
        salmon: '#D97260',
      },
      fontFamily: {
        bolsgi: ['Outfit', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
