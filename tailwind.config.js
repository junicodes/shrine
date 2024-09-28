/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx}", "./app/**/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}", "./constants/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  include: ["src/components", "custom.d.ts"]
}
