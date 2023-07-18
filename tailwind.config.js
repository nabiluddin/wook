 module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '240px',
       

      'md': '768px',
       

      'lg': '1024px',
       

      'xl': '1280px',
       

      '2xl': '1536px',
       
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

