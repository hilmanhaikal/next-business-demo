import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#3498db', // A professional blue
        secondary: '#2ecc71', // A modern green
        accent: '#f39c12', // A warm orange
        neutral: '#34495e', // A dark gray for text
        light: '#ecf0f1', // A light background
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Modern sans-serif font
        serif: ['"Merriweather"', 'serif'], // Elegant serif font
      },
      boxShadow: {
        'lg-soft': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config