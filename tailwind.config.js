/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: 'Gilroy',
        manrope: 'Manrope',
        inter: 'Inter'
      },
      width: {
        10: '10rem',
        30: '30rem',
      },
      padding: {
        0.5: '0.5rem',
        1.5: '1.5rem',
        2: '2rem',
        2.25: '2.25rem',
        2.5: '2.5rem',
        2.75: '2.75rem',
        4.5: '4.5rem',
        3.25: '3.25rem'
      },
      gridTemplateColumns: {
        '3fr.1fr': '3fr 1fr',
        '1fr.max.1fr': '1fr max-content 1fr'
      },
      gridTemplateRows: {
        content: 'max-content auto max-content'
      },
      gap: {
        0.5: '0.5rem',
        1: '1rem',
        1.25: '1.25rem',
        1.5: '1.5rem',
        2: '2rem'
      },
      colors: {
        'background-gray': 'rgb(240, 245, 245)',
        'border-gray': 'rgb(205, 210, 221)',
        'placeholder-gray': 'rgb(156,163,175)',
        'disabled-bg-gray': 'rgb(231, 235, 241)',
        'disabled-text-gray': 'rgb(148, 150, 151)',
        'overlay-gray': 'rgb(9, 35, 38);',
        gray: 'rgb(103, 103, 103)',
        'output-green': 'rgb(178, 241, 222)',
        'output-border-green': 'rgb(8, 216, 153)',
        'order-green': 'rgb(178, 241, 222)',
        green: 'rgb(8, 216, 153)',
      }
    }
  },
  plugins: []
}
