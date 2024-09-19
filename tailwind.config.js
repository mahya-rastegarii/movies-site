/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor:{
         color:{
            1: 'var(--bg-color-4)',
            2:'var(--color)',
            3:'var(--text-color)',
            4:'var(--bg-color-2)',
            5: 'var(--bg-color-3)',
         }
      },
      textColor: {

          color:{
            1:'var(--text-color)',
            2:'var(--color)',
            3: 'var(--bg-color-2)'
          }
           
      },
      backgroundColor: {

        color: {
          1:'var(--bg-color-1)',
          2:'var(--bg-color-2)',
          3:'var(--bg-color-3)',
          4:'var(--bg-color-4)',
          hover: 'var(--color)',
        }
       
      }
     
    },
  },
  plugins: []
}


