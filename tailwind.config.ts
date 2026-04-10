import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal/black base — matches logo background
        ink: {
          950: '#0B0B0D',
          900: '#111114',
          800: '#17171B',
          700: '#1F1F24',
          600: '#2A2A30',
          500: '#3A3A42',
          400: '#55555F',
          300: '#7A7A84',
          200: '#A8A8B0',
          100: '#D4D4D8',
          50:  '#F2F2F4',
        },
        // Antique gold — primary accent from the crown emblem
        gold: {
          900: '#6B4E14',
          800: '#8A6518',
          700: '#A97E1D',
          600: '#C69538',
          500: '#D9A846',
          400: '#E2B866',
          300: '#EBC887',
          200: '#F2D9A8',
          100: '#F8E9C9',
        },
        // Silver — secondary from the heraldic work
        silver: {
          700: '#6F7178',
          500: '#9DA0A8',
          300: '#C7C9CE',
          100: '#E8E9EC',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(135deg, #EBC887 0%, #D9A846 35%, #A97E1D 65%, #D9A846 100%)',
      },
    },
  },
  plugins: [],
}

export default config
