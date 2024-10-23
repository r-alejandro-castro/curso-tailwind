
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      // Aqui vamos a poner el color deseado
      colors: {
        'orange': '#dadd39',
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
    },
  },
  plugins: [],
};

