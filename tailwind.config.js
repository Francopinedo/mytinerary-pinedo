/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [ 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  }
}

