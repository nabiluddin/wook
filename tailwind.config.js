/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '240px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        light: '#E0E2E5',
        green: '#19725D',
        pcolor: '#E2CBE7',
      },
      fontFamily: {
        rowdies: ['Rowdies', 'cursive'],
        rubikwp: ['Rubik Wet Paint', 'cursive'],
      },
    },
  },
  plugins: [],
}

