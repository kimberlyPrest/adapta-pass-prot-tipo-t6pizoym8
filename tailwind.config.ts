import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import typographyPlugin from '@tailwindcss/typography'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        adapta: {
          bg: '#0A0A0A',
          card: '#141414',
          cardSec: '#1C1C1C',
          border: '#2A2A2A',
          orange: '#FF6B00',
          teal: '#00C9B1',
          red: '#FF3B3B',
          yellow: '#FFB800',
          green: '#00C851',
          purple: '#9B59B6',
          textGray: '#888888',
          textDarkGray: '#444444',
        },
        border: '#2A2A2A',
        input: '#2A2A2A',
        ring: '#FF6B00',
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#FF6B00',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#141414',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#FF3B3B',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1C1C1C',
          foreground: '#888888',
        },
        accent: {
          DEFAULT: '#00C9B1',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#141414',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#141414',
          foreground: '#FFFFFF',
        },
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '6px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [animatePlugin, typographyPlugin, aspectRatioPlugin],
} satisfies Config
