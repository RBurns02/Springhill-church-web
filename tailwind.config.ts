import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        church: {
          purple:  '#5B21B6',
          deep:    '#3B0764',
          gold:    '#C9813A',
          cream:   '#FFF8F0',
          warm:    '#F7F0E6',
          dark:    '#180C2E',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #180C2E 0%, #3B0764 45%, #5B21B6 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D97706 0%, #C9813A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
