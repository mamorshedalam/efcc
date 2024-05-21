/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Didact Gothic', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      prata: ['Prata', 'ui-sans-serif', 'system-ui'],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1500px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white-100': '#f8f9fa',
      'black': '#000000',
      'red-100': '#6e0d13',
      'red-80': '#be0712',
      'red-60': '#8a2424',
      'ash-100': '#444444',
      'ash-80': '#666666',
      'ash-60': '#9e9e9e',
      'dark-100': '#282a2e',
      'dark-80': '#adb5bd',
      'dark-60': '#BDBDBD',
      'dark-40': '#444444',
      'orange-100': '#b69d74',
    }
  },
  plugins: [],
};