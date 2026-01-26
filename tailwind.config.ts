import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#4CC9F0',
          dark: '#2EBCE8',
          light: '#6DD4F5',
        },
        dark: {
          bg: '#0b0f10',
          bg2: '#0f1416',
          card: 'rgba(255, 255, 255, 0.04)',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0b0f10 0%, #0f1416 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
