/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx}", "./app/**/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}", "./constants/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey_900: '#111827',
        grey_100: '#F3F4F6',
        grey_400: '#9CA3AF',
        grey_200: '#E5E7EB',
        grey_500: '#6B7280',
        gret_50: '#F9FAFB',
        natural_grey_900: '#1D2739',
        primary_900: '#761022',
        primary_50: '#F1E7E9',
      }
    },
  },
  plugins: [],
  include: ["src/components", "custom.d.ts"]
}
