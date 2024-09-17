/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '16xl': '8rem', // Define a custom size for text-16xl
        '24xl': '8rem', // Define a larger custom size for text-24xl
      },
    },
  },
  variants: {},
  plugins: [],
}

