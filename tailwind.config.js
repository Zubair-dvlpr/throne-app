/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Bai-Jamjuree': ['Bai Jamjuree', 'sans-serif'],
      'Ringbearer': ['Ringbearer', 'sans-serif'],
      'Paytone-One': ['Paytone One', 'sans-serif'],
      'Lexend': ['Lexend', 'sans-serif']
    },
    extend: {
      gridColumn: {
        'span-24': 'span 24 / span 24',
        'span-23': 'span 23 / span 23',
        'span-22': 'span 22 / span 22',
        'span-21': 'span 21 / span 21',
        'span-20': 'span 20 / span 20',
        'span-19': 'span 19 / span 19',
        'span-18': 'span 18 / span 18',
        'span-17': 'span 17 / span 17',
        'span-16': 'span 16 / span 16',
        'span-15': 'span 15 / span 15',
        'span-14': 'span 14 / span 14',
        'span-13': 'span 13 / span 13',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
        '23': 'repeat(23, minmax(0, 1fr))',
        '22': 'repeat(22, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: {
          main: '#F8694D',
          heading: '#171717',
          text: '#6D6D6D',
        },
        heading: {
          color: '#171717'
        },
        red: {
          500: '#F8694D'
        },
        text: {
          'color': '#787878'
        },
        black: {
          800: '#171717'
        },
        fontSize: {
          '7xl': '22.892px'
        },
      }
    },
  },
  plugins: [],
}

