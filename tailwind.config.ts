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
          purple: '#1A5FA8',   // steel blue
          deep:   '#0C3464',   // deep navy
          gold:   '#C9813A',   // warm gold
          cream:  '#FAFAFA',   // near-white
          warm:   '#F0F5FF',   // very light blue tint
          dark:   '#0A1628',   // very dark navy
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(160deg, #071525 0%, #0C3464 50%, #1A5FA8 100%)',
        'gold-gradient':  'linear-gradient(135deg, #D97706 0%, #C9813A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
