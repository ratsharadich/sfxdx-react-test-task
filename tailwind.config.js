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
        4.5: '4.5rem',
        9.25: '9.25rem',
        10: '10rem',
        12.5: '12.5rem',
        17.5: '17.5rem',
        24.75: '24.75rem',
        30: '30rem',
        'half-screen': '50vw',
      },
      maxWidth: {
        19.5: '19.5rem',
      },
      height: {
        2.25: '2.25rem',
        2.75: '2.75rem',
        3: '3rem',
        3.125: '3.125rem',
        'half-screen': '50vh',
      },
      maxHeight: {
        '85screen': '85vh',
      },
      minHeight: {
        20.5: '20.5rem',
      },
      margin: {
        'half-screen-with': '50vw',
      },
      padding: {
        0.25: '0.25rem',
        0.5: '0.5rem',
        0.75: '0.75rem',
        1: '1rem',
        1.25: '1.25rem',
        1.5: '1.5rem',
        1.75: '1.75rem',
        2: '2rem',
        2.25: '2.25rem',
        2.5: '2.5rem',
        2.75: '2.75rem',
        4.5: '4.5rem',
        3.25: '3.25rem'
      },
      gridTemplateColumns: {
        '3fr.1fr': '3fr 1fr',
        '1fr.max.1fr': '1fr max-content 1fr',
        '5fr.3fr': '5fr 3fr',
        'account-badge': '1.5rem minmax(7.5rem,auto) 1rem',
      },
      gridTemplateRows: {
        content: 'max-content auto max-content'
      },
      gap: {
        0.25: '0.25rem',
        0.5: '0.5rem',
        1: '1rem',
        1.25: '1.25rem',
        1.5: '1.5rem',
        2: '2rem',
        2.5: '2.5rem',
      },
      borderRadius: {
        0.5: '0.5rem',
        1.25: '1.25rem',
      },
      opacity: {
        15: '.15',
      },
      blur: {
        6.25: '6.25rem',
      },
      rotate: {
        'minus131': '-131deg',
        'minus65.41': '-65.41deg',
      },
      lineHeight: {
        1.5: '1.5rem',
      },
      inset: {
        0.5: '0.5rem',
        'minus1.5': '-1.5rem',
      },
      translate: {
        'minus50%': '-50%',
      },
      colors: {
        'background-gray': 'rgb(240, 245, 245)',
        'border-gray': 'rgb(205, 210, 221)',
        'placeholder-gray': 'rgb(156,163,175)',
        'disabled-bg-gray': 'rgb(231, 235, 241)',
        'disabled-text-gray': 'rgb(148, 150, 151)',
        'overlay-gray': 'rgb(9, 35, 38);',
        gray: 'rgb(103, 103, 103)',
        'light-green': 'rgb(178, 241, 222)',
        'elips-green': 'rgb(58, 201, 34)',
        green: 'rgb(8, 216, 153)',
      }
    }
  },
  plugins: []
}
