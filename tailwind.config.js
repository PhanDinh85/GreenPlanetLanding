/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ['./src/**/*.{html,js}',
    "./*.html"
  ],
  theme: {
    extend: {
      colors:{
        'sky':'#b4dbe1',
        'spruce':'#113259',
        'fern':'#6fba0d',
        'sunset':'#dc582a'
      },
     fontSize:{
      'hero':'11rem'
     }
    },
  },
  plugins: [],
}

