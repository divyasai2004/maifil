/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        maifil: {
          red: '#C82333',
          gold: '#F5A623',
          cream: '#FDFBF7',
          ink: '#1A1A1A',
          green: '#167A4A',
        },
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.06)',
        lift: '0 16px 42px rgba(38,27,21,0.12)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
