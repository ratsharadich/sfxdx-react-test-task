/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        2.75: "2.75rem",
        4.5: "4.5rem",
      },
      gridTemplateColumns: {
        "3fr.1fr": "3fr 1fr",
      },
      gridTemplateRows: {
        "1.2fr.1fr": "1.2fr 1fr",
        "content": 'minmax(0,6.25rem) auto minmax(0,13.75rem)',
      },
      gap: {
        1.25: "1.25rem",
      },
    },
  },
  plugins: [],
};
