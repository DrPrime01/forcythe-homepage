/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			secondary: '#064386',
  			accent: '#60a6e7',
  			accent2: '#b3d0f2',
  			accent3: '#0c2645',
  			'dark-grey': '#aea9b1',
  			'light-grey': '#e6e0e9',
  			bg: {
  				primary: '#030516',
  				secondary: '#1f3449'
  			}
  		},
  		spacing: {
  			'4.5': '18px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [scrollbarHide, require("tailwindcss-animate")],
};
