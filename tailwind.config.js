/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: "Gilroy",
      },
      padding: {
        0.5: '0.5rem',
        2.5: "2.5rem",
        2.75: "2.75rem",
        4.5: "4.5rem",
        3.25: "3.25rem",
      },
      gridTemplateColumns: {
        "3fr.1fr": "3fr 1fr",
        "1fr.max.1fr": "1fr max-content 1fr",
      },
      gridTemplateRows: {
        "1.2fr.1fr": "1.2fr 1fr",
        content: "minmax(0,6.25rem) auto minmax(0,13.75rem)",
      },
      gap: {
        1.25: "1.25rem",
        1: '1rem',
        2: "2rem",
      },
      colors: {
        "footer-bg": "rgb(240, 245, 245)",
        "footer-text": "rgb(103, 103, 103)",
      },
    },
  },
  plugins: [],
};
