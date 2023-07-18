
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'navbar-bg' : '#F5F5F5',
        'navbar-bg-2' : '#E74C32',
        'navbar-text-dark-blue' : '#090c13',
        'main-color' : '#0AC5A8',

      },
      fontFamily: {
        poppins : 'Poppins',
        quicksand : 'Quicksand',

      },

      width: {
        '61': '600px',
        '100' : '120vw',
        '60': '58%',
        '66': '60%',
        '30' : '30rem',
        '18' : '20rem',
      },

      height: {
        '61': '5px',
        '100' : '120vw',
        '60': '58%',
        '66': '60%',
        '30' : '30rem',
        '18' : '20rem',
      },


       spacing: {
        '45rem': '45rem', // lady image 
        '47rem': '47rem',
        '33rem': '33rem',
        '37rem': '37rem',
        '30rem': '30rem',
        '7rem': '7rem' ,  
        '5rem': '5rem' , 
        '10.6rem': '10.6rem' , 
        '23rem': '23rem' 
      },

    },
  },
  plugins: [],
}