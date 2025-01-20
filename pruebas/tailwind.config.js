
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      // Aqui vamos a poner el color deseado
      colors: {
        'orangee': '#dadd39',
        'azul': '#007bff'
      },

      // Aqui vamos a poner ancho
      width: {
        '500': '500px'
      },

      // Aqui vamos a poner alto
      height: {
        '400': '400px'

      },
      // Punto de quiebre (Responsive)
      screens: {
        'laptop': '1500px',
      }
    },
  },
  plugins: [],
};

