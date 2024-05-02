/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tgray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        primary: {
          25: '#FAFFFE',
          50: '#F5FFFD',
          100: '#EBFFFB',
          200: '#D7FEF7',
          300: '#BBFBEC',
          400: '#92F6DE',
          500: '#77EDD8',
          600: '#56D9C1',
          700: '#41C6AE',
          800: '#389E8C',
          900: '#307D6F',
        },
      },
    },
  },
  plugins: [],
};
