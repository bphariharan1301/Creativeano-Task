module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Covers all JS, JSX, TS, and TSX files in src and subdirectories
    "./src/components/**/*.{js,jsx,ts,tsx}", // Specifically covers component files in src/components
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#f5f5f5',
      },
    },
  },
  plugins: [],
}