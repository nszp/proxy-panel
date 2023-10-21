import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lilith': '#ed2b5b',
        'lilith-hover': '#ba2147',
        'blurple': '#5865F2',
        'lgray': {
          700: '#2b2b2b',
          750: '#222222',
          800: '#1E1E1E',
          900: '#171717'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config
