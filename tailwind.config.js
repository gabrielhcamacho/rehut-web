const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      xxs: '350px',
      xs: '390px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        ...colors,
        'primary': '#ea3a60',
        'primary-shadow': '#a62b46',
        'text': '#343D48',
        'text-darker': '#293038',
        'border': 'rgba(0, 0, 0, 0.5)',
        'card-border': 'rgba(230, 236, 245, 0.55)',
        'heading': '#0F2137',
        'blue': '#008FFB',
        'blue-light': '#00a4fb',
        'blue-shadow': '#0070c4',
        'dark-blue': '#0F2137',
        'purple': '#7e5bef',
        'orange': '#E65843',
        'red': '#e3121d',
        'green': '#1cb83b',
        'yellow': '#FFA740',
        'gray-dark': '#273444',
        'gray': '	#888888',
        'gray-light': '#d3dce6',
        'gray-lighter': '#f3f4f6',
        'gray-super-light': '#EFEFEF',
        'white': '#FFF',
        'indigo-500': '#6366f1',
        'purple-500': '#a855f7',
        'pink-500': '#ec4899',
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    fontFamily: {
      body: ['DM Sans', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      heading: "'DM Sans', sans-serif",
    },
    ...defaultTheme
  },
  plugins: [],
}
