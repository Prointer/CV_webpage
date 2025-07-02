// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand:{ DEFAULT: "#40CF8F", light: "#A0F2D1", dark: "#2A8B5C" },
				bgbrand: { DEFAULT: "#121212", light: "#FFFFFF", dark: "#121212" },
      },
			fontFamily:{
				sans: ['-apple-system', 'Inter', 'system-ui', 'sans-serif'],
			}
    }
  },
  plugins: []
}

export default config