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
          purple: '#1A4731',   // deep forest green (replaces purple throughout)
          deep:   '#0D1A10',   // very dark green
          gold:   '#C9813A',   // warm gold — unchanged
          cream:  '#FFF8F0',   // warm off-white — unchanged
          warm:   '#F7F0E6',   // warm cream sections — unchanged
          dark:   '#0A1A0C',   // near-black dark green for dark sections
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(160deg, #0A1A0C 0%, #0D2818 45%, #1A4731 100%)',
        'gold-gradient':  'linear-gradient(135deg, #D97706 0%, #C9813A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
