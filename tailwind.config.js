const { fontFamily } = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
const { parseColor } = require('tailwindcss/lib/util/color');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Titillium Web', ...fontFamily.sans],
        headings: ['Titillium Web', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ matchComponents, theme }) {
      matchComponents(
        {
          'btn-highlight': (value) => {
            const { color } = parseColor(value) || {};

            return {
              position: 'relative',
              animation: '1s ease-in-out 0s infinite normal reverse animation-highlight',
              'animation-play-state': 'paused',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '0px',
                left: '-50%',
                width: '100%',
                height: '100%',
                animation: '1s ease-in-out 0s infinite normal reverse animation-highlight',
                'animation-play-state': 'paused',
              },
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                top: '0px',
                left: '-50%',
                width: '100%',
                height: '100%',
                background: color
                  ? `linear-gradient(246deg, rgba(${color[0]},${color[1]},${color[2]},0) 16%, rgba(${color[0]},${color[1]},${color[2]},0.56) 36%, rgba(${color[0]},${color[1]},${color[2]},0.56) 56%, rgba(${color[0]},${color[1]},${color[2]},0) 86%)`
                  : null,
                animation: '1s ease-in-out 0s infinite normal forwards animation-highlight',
                'animation-play-state': 'running',
                'pointer-events': 'none',
              }
            }
          },
          'btn-sheen': (value) => {
            const { color } = parseColor(value) || {};

            return {
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.5s',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '0px',
                left: '-100%',
                width: '100%',
                height: '100%',
                background: color
                  ? `linear-gradient(246deg, rgba(${color[0]},${color[1]},${color[2]},0) 16%, rgba(${color[0]},${color[1]},${color[2]},0.56) 36%, rgba(${color[0]},${color[1]},${color[2]},0.56) 56%, rgba(${color[0]},${color[1]},${color[2]},0) 86%)`
                  : null,
                transition: '0.5s',
              },
              '&:hover::after': {
                left: '100%'
              },
              '&:active::after': {
                left: '15%',
                transform: 'scale(5)'
              }
            }
          }
        },
        {
          values: { ...flattenColorPalette(theme('colors')) },
          type: ['color', 'any'],
        }
      )
    },
    function ({ addUtilities }) {
      addUtilities({
        '.highlight-inner': {
          boxShadow: `inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35),
          inset 0px -1px 0px 0px rgba(0, 0, 0, 0.25)`,
        },
      })
    },
  ],
}
