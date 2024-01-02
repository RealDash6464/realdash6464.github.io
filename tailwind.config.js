/** @type {import('tailwindcss').Config} */
import keepPreset from 'keep-react/preset';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {
      fontFamily: {
        Khand: ['Khand', 'sans-serif'],
        Antonio: ['Antonio', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif']
      },
      colors: {
        yellow: '#F8A300',
        blue: '#181B2E'
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
        fadeOut: 'fadeOut 500ms ease-in-out forwards',
        fadeIn2: 'fadeIn2 1500ms ease-in-out',
        fadeOut2: 'fadeOut2 1500ms ease-in-out forwards'
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0, display: 'none' },
          '100%': { opacity: 1, display: 'block' }
        },
        fadeOut: {
          '0%': { opacity: 1, display: 'block' },
          '100%': { opacity: 0, display: 'none' }
        },
        fadeIn2: {
          '0%': { opacity: 0, display: 'none' },
          '100%': { opacity: 1, display: 'block' }
        },
        fadeOut2: {
          '0%': { opacity: 1, display: 'block' },
          '100%': { opacity: 0, display: 'none' }
        }
      })
    }
  },
  plugins: [require('tailwindcss-animated'), require('taos/plugin')],
  presets: [keepPreset]
};
