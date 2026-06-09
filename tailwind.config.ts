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
          purple: '#2D3748',   // deep slate (primary)
          deep:   '#1A202C',   // very dark slate
          gold:   '#C9813A',   // warm gold
          cream:  '#FAFAFA',   // near-white
          warm:   '#F4F4F5',   // light gray
          dark:   '#18181B',   // charcoal
        },
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(to bottom right, #0D1117 0%, #1A202C 55%, #2D3748 100%)',
        'gold-gradient':  'linear-gradient(135deg, #D97706 0%, #C9813A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
