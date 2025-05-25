/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/js/**/*.js',
    './**/*.php',       // **cualquier** .php en tema
    './**/*.html',      // si acaso tienes html sueltos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
 