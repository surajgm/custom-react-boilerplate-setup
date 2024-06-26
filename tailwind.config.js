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
        tprimary: {
          50: '#F9F8F5',
          100: '#ECE9DA',
          200: '#D1BBA6',
          300: '#D6CFB0',
          400: '#94663B',
          500: '#4662EA',
          600: '#1A3A6B',
        },
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     '.border-gradient': {
    //       borderWidth: '8px',
    //       borderStyle: 'solid',
    //       borderImage:
    //         'linear-gradient(to right, #0FA61E 25%, #DCD41A 25%, #DCD41A 50%, #DCD41A 75%, #D13333 75%) 1',
    //     },
    //   });
    // },
  ],
};
