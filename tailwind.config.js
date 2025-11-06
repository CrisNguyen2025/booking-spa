/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        zelene_blue: '#1D3F75',
        zelene_yellow: '#D29A2A',
        zelene_red: '#B84E44',
        zelene_white: '#FFFFFF',
        zelene_grey: '#A7A7A7',
        zelene_gray_6: '#F2F2F2',
        zelene_heavy_cream: '#FCDCAB',
        zelene_light_blue: '#407CDE',
        zelene_dark_blue: '#102647',
        zelene_gradient_blue_start: '#102647',
        zelene_gradient_blue_end: '#1D3F75',
        zelene_gradient_light_start: '#FFFDF9',
        zelene_gradient_light_end: '#FFE189',
        zelene_gradient_cream_start: '#FFFDF9',
        zelene_gradient_cream_end: '#FEE6BE',
        zelene_gradient_beige_start: '#FFF9EF',
        zelene_gradient_beige_end: '#FEF1DD',
        zelene_beige: '#FFFDF9',
        zelene_cream: '#FDEFDC',
        zelene_error: '#dc2626',
      },
      fontFamily: {
        hneu: ['"Helvetica Neue Light"', 'sans-serif'],
        didot: ['"Didot"', 'serif'],
        prettywise: ['Prettywise', 'sans-serif'],
        sans: ['Helvetica Neue', 'sans-serif'], // Chuyển fontSans vào đây
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
    },
    fontSize: {
      sm: '0.75rem',
      md: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    backgroundImage: {
      'slide-image': 'url("/assets/images/slide-image.png")',
    },
  },
  plugins: [],
};
