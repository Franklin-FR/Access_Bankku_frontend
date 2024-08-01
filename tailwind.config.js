// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-small': "url('/src/assets/businessBankingSlider.png')",
        'bg-large': "url('/src/assets/businessBankingLargeScreen.png')",
        'custom-gradient': 'linear-gradient(to bottom, #057A82 100%, #057A82A6 65%)',

      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif'],
        'abel': ['Abel', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}