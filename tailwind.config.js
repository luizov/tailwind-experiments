const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
const { parseColor } = require('tailwindcss/lib/util/color');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ matchComponents, theme }) {
      matchComponents(
        {
          'btn-highlight': (value) => {
            const { color } = parseColor(value) || {};

            return {
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
                animation: '1s ease-in-out 0s infinite normal forwards running animation-highlight',
                'pointer-events': 'none',
              }
            }
          },
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
          boxShadow: `inset 0px 1px 1px 0px rgba(255, 255, 255, 0.45),
          inset 0px -1px 1px 0px rgba(0, 0, 0, 0.25),
          inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25)`,
        },
      })
    },
  ],
}
