/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        2.75: '2.75rem',
        4.5: '4.5rem',
      },
      gridTemplateColumns: {
        "order-desk": "minmax(60.75rem, 3fr) minmax(19.75rem, 1fr)",
      },
      gridTemplateRows: {
        "order-desk": "minmax(32rem, 1.2fr) minmax(20.75rem, 1fr)",
      },
      gap: {
        1.25: '1.25rem',
      },
    },
  },
  plugins: [],
};
