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
        'light-pink':'#FFF5E8'
      },
      transform: {
        'translate-x-full': 'translateX(100%)',
        'translate-x-none': 'translateX(0%)',
      }
    },
  },
  plugins: [],
};
