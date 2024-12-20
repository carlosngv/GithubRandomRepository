/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Incluye el archivo principal de Vite
    "./src/**/*.{js,ts,jsx,tsx}" // Asegúrate de incluir los archivos de React
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'mxl': '1050px',
        'smp': '430px'
      }
    },
  },
  plugins: [],
}
