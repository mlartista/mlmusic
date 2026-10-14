/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ml-green': '#1DB954', // Base Spotify-like green, can be adjusted for ML Music
        'ml-black': '#121212',
        'ml-dark-grey': '#181818',
        'ml-light-grey': '#282828',
        'ml-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
