import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070B12',
        panel: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.12)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.12)'
      }
    },
  },
  plugins: [],
} satisfies Config;
