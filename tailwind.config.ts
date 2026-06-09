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
          purple: '#1A4731',   // deep forest green (primary)
          deep:   '#0D2B1E',   // very dark green
          gold:   '#C9813A',   // warm gold
          cream:  '#FAFAFA',   // near-white
          warm:   '#F4F4F5',   // light gray
          dark:   '#18181B',   // charcoal
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(to bottom right, #0A1A0E 0%, #0D2B1E 55%, #1A4731 100%)',
        'gold-gradient':  'linear-gradient(135deg, #D97706 0%, #C9813A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
