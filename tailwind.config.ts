import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
        sidebar: '#1e2235',
        surface: '#f0f4f8',
        border: '#e2e8f0',
        ink: {
          DEFAULT: '#111827',
          secondary: '#6b7280',
          muted: '#9ca3af',
        },
        /** Public marketing site — brand palette */
        site: {
          navy: '#12375C',
          'navy-dark': '#0e2c4d',
          'navy-mid': '#154d7a',
          red: '#BF2227',
          'red-dark': '#9e1d21',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config
