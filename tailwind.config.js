/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      height: {
        'screen-1/5': '20vh',
        'screen-2/5': '40vh',
        'screen-3/5': '60vh',
        'screen-4/5': '80vh',
        'screen-1/6': '16.66vh',
        'screen-2/6': '33.32vh',
        'screen-3/6': '49.98vh',
        'screen-4/6': '66.64vh',
        'screen-5/6': '83.3vh',
      },
      keyframes: {
        "text-entry": {
          '0%': { transform: 'translateX(-1em)', opacity: '10%' }, 
          '50%': { opacity: '50%' },
          '100%': { transform: 'translateX(0)' },
        },
        "text-entry-invert": {
          '0%': { transform: 'translateX(1em)', opacity: '10%' }, 
          '50%': { opacity: '50%' },
          '100%': { transform: 'translateX(0)' },
        },
        "icon-entry": {
          '0%': { transform: 'translateX(-0.1em) translateY(-0.2em)', opacity: '10%'},
          '50%': { opacity: '50%' },
          '100%': { transform: 'translateX(0), translateY(0)' },
        }
      },
      animation: {
        "text-entry-1": 'text-entry 1s ease-in-out',
        "text-entry-1.5": 'text-entry 1.5s ease-in-out',
        "text-entry-2": 'text-entry 2s ease-in-out',
        "text-entry-3": 'text-entry 3s ease-in-out',
        "text-entry-4": 'text-entry 4s ease-in-out',
        "text-entry-5": 'text-entry 5s ease-in-out',
        "text-entry-invert-1": 'text-entry-invert 1s ease-in-out',
        "text-entry-invert-2": 'text-entry-invert 2s ease-in-out',
        "text-entry-invert-3": 'text-entry-invert 3s ease-in-out',
        "text-entry-invert-4": 'text-entry-invert 4s ease-in-out',
        "text-entry-invert-5": 'text-entry-invert 5s ease-in-out',
        "icon-entry-1": 'icon-entry 1s ease-in-out',
        "icon-entry-1.5": 'icon-entry 1.5s ease-in-out',
        "icon-entry-2": 'icon-entry 2s ease-in-out',
      }
    },
  },
  plugins: [],
}
