/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF4',
          100: '#FAF3DE',
          200: '#F4E5B8',
          300: '#EAD085',
          400: '#DFBA5A',
          500: '#D4AF37', // Pure Luxury Gold
          600: '#C5A059', // Champagne Gold
          700: '#B8860B', // Metallic Deep Gold
          800: '#946B08',
          900: '#684B05',
        },
        ivory: {
          50: '#FCFBF9',
          100: '#FAF9F6',
          200: '#F5F3ED',
          300: '#EDE9DE',
        },
        charcoal: {
          800: '#2B2B2B',
          900: '#1A1A1A',
          950: '#111111',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 8px 30px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 20px 45px rgba(212, 175, 55, 0.25)',
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.05), 0 0 20px -2px rgba(212, 175, 55, 0.1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFBA5A 0%, #D4AF37 50%, #C5A059 100%)',
        'gold-metallic': 'linear-gradient(135deg, #FBF4DC 0%, #D4AF37 40%, #B8860B 75%, #F4E5B8 100%)',
        'subtle-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
