/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        bg2: '#12121a',
        bg3: '#1a1a25',
        bg4: '#242430',
        accent: '#6366f1',
        accent2: '#8b5cf6',
        accent3: '#a855f7',
        gold: '#ffd700',
      },
    },
  },
  plugins: [],
}
