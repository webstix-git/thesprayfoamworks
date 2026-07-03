import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E4141B',
          dark: '#0B0B0C',
        },
      },
      fontFamily: {
        archivo: ['var(--font-archivo)', 'sans-serif'],
        anton: ['var(--font-anton)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        hanken: ['var(--font-hanken)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
