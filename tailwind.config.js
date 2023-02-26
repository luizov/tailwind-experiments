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
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          highlight: (value) => {
            const { color } = parseColor(value)

            return {
              content: '""',
              position: 'absolute',
              top: '0px',
              left: '-50%',
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, rgba(${color[0]} ${color[1]} ${color[2]} / 0) 0%, rgba(${color[0]} ${color[1]} ${color[2]} / 0.45) 40%, rgba(${color[0]} ${color[1]} ${color[2]} / 0.45) 60%, rgba(${color[0]} ${color[1]} ${color[2]} / 0) 100%)`,
              animation: '1s ease-in-out 0s infinite normal forwards running typ-k-gIpqIT',
              'pointer-events': 'none',
            }
          },
        },
        {
          values: flattenColorPalette(theme('colors')),
          type: ['color', 'any'],
        }
      )
    },
    function ({ addUtilities }) {
      addUtilities({
        '.highlight-inner': {
          boxShadow: `inset 0px 1px 0px rgba(255, 255, 255, 0.35),
          inset 0px -1px 0px rgba(0, 0, 0, 0.15)`,
        },
      })
    },
  ],
}
