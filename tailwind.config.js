export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          text: '#000000',
        },
        dark: {
          bg: '#1e1e1e',
          text: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}