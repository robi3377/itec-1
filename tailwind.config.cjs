/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        Merriweather: 'Merriweather Sans',
        Montserrat: 'Montserrat, sans-serif',
        Roboto: 'Roboto, sans-serif'
      }
    }
  },
  plugins: []
};

