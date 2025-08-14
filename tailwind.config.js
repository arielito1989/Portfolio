/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#3b82f6',
          secondary: '#10b981',
        },
        dark: {
          background: '#111827',
          text: '#ffffff',
          primary: '#2563eb',
          secondary: '#059669',
        },
      },
    },
  },
  plugins: [],
}
