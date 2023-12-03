/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./standart.css"
  ],
  theme: {
    fontFamily :{
    
    },
    extend: {
      content: {
        'link': 'url("/icons/link.svg")',
      },
    },
  },
  plugins: [],
}

