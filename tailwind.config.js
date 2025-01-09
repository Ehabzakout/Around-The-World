/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{center:true,
      screens:{
        'sm':'300px',
        'md':'600px',
        'lg':'900px',
      }
    },
    screens:{
sm:'300px',
md:'620px',
lg:'1000px',
    },
    extend: {
      fontFamily:{
        inter:["Inter","sans-serif"]
      },
    },
  },
  plugins: [],
}

