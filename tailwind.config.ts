import type { Config } from 'tailwindcss';

// Retain the existing utility names for compatibility across every original route.
// The old `church-purple` utility now maps to the updated forest-green primary.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        church: {
          purple: '#173e31',
          deep:   '#0d2822',
          gold:   '#c7a76a',
          cream:  '#f8f7f1',
          warm:   '#f0eee5',
          dark:   '#0d2822',
        },
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #0d2822 0%, #173e31 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d8bc81 0%, #c7a76a 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
