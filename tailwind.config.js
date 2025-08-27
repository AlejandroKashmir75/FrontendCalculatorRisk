/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'risk-very-low': '#10B981',
        'risk-low': '#3B82F6',
        'risk-medium': '#F59E0B',
        'risk-high': '#EF4444',
        'risk-very-high': '#7C2D12',
      }
    },
  },
  plugins: [],
}








