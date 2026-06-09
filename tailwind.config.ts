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
          purple: '#1C1917',   // charcoal — primary dark
          deep:   '#0C0A09',   // near-black — hover state
          gold:   '#C9A84C',   // refined classic gold
          cream:  '#FAFAF8',   // near-white
          warm:   '#F0EEE9',   // warm stone section bg
          dark:   '#1C1917',   // charcoal — dark sections
        },
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(to bottom, #1C1917 0%, #292524 100%)',
        'gold-gradient':  'linear-gradient(135deg, #D4AF37 0%, #C9A84C 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
