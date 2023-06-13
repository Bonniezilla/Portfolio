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
      },
    },
  },
  plugins: [],
}
