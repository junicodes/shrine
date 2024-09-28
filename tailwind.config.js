/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx}", "./app/**/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}", "./constants/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey_900: '#111827',
        grey_400: '#9CA3AF',
        grey_200: '#E5E7EB',
        primary_900: '#761022',
      }
    },
  },
  plugins: [],
  include: ["src/components", "custom.d.ts"]
}
