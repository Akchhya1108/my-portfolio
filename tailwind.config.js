/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metamask-cream': '#F6E9DA',
        'metamask-purple': '#1F0F3D',
        'metamask-orange': '#F97316',
        'metamask-brown': '#8B4513',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}