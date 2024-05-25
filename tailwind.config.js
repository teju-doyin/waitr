/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'#FE9D1A',
        'black':'#21232A',
        'off-orange':'#FFF5E8'
      }
    },
  },
  plugins: [],
};
