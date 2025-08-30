/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': "linear-gradient(to bottom right, #d4bfff, #ffc7b2)",
      },
    },
  },
  plugins: [],
}
