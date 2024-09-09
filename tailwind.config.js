
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        quickSand : ["Quicksand" , "sans-serif"]
      },
      padding: {
        'py-custom': `calc(2.5rem + 2vw)`, // Custom padding-y formula
      },
      width: {
        'wFit_sidebaropen': `calc(76vw)`,
        'wFit_sidebarclose': `calc(90vw)`,
        'wScreen': 'calc(100vw - 16rem)',
      },
    },
  },
  plugins: [],
}

