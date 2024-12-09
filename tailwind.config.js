/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx}", "./app/**/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}", "./constants/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'of': '#0F172A',
        grey_700: '#374151',
        grey_900: '#111827',
        grey_100: '#F3F4F6',
        grey_400: '#9CA3AF',
        grey_200: '#E5E7EB',
        grey_500: '#6B7280',
        gret_50: '#F9FAFB',
        grey_4f6: '#F4F4F6',
        natural_grey_900: '#1D2739',
        primary_900: '#761022',
        primary_50: '#F1E7E9',
        others_red: '#E22E31',
        other_8b: '#64748B',
        other_95: '#95939A',
      }
    },
  },
  plugins: [],
  include: ["src/components", "custom.d.ts"]
}
