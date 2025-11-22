/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant orange gradient primary (FE6301 ➜ FF9101)
        primary: {
          50: '#FFF3E8',
          100: '#FFE0C2',
          200: '#FFC28A',
          300: '#FFA054',
          400: '#FF9101',
          500: '#FE6301',
          600: '#E35600',
          700: '#BC4400',
          800: '#8E3300',
          900: '#612200',
        },
        // Deep navy backgrounds
        space: {
          950: '#040C1A',
          900: '#061425',
          850: '#0A1F38',
          800: '#0F2747',
          700: '#162E59',
          600: '#1F3B6D',
        },
        // Cool accent spectrum for interactive glows
        neon: {
          cyan: '#4FC3F7',
          purple: '#8C9EFF',
          pink: '#FF9AC2',
          green: '#7DE3D9',
          lime: '#FFB562',
          blue: '#5E9BFF',
        },
        // Muted slate neutrals for text accents
        charcoal: {
          50: '#F5F7FA',
          100: '#E6ECF5',
          200: '#CBD8EA',
          300: '#AFC2D9',
          400: '#8EA8C3',
          500: '#6E8CAC',
          600: '#517099',
          700: '#3C567D',
          800: '#2C4161',
          900: '#1F2E45',
        },
        dark: '#040C1A',
        light: '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(255, 145, 1, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(254, 99, 1, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(79, 195, 247, 0.22), 0 0 24px rgba(79, 195, 247, 0.14)',
        'neon-purple': '0 0 10px rgba(140, 158, 255, 0.18), 0 0 24px rgba(140, 158, 255, 0.12)',
        'neon-pink': '0 0 12px rgba(255, 154, 194, 0.2), 0 0 28px rgba(255, 154, 194, 0.14)',
        'neon-orange': '0 0 14px rgba(254, 99, 1, 0.28), 0 0 32px rgba(255, 145, 1, 0.18)',
        'neon-green': '0 0 12px rgba(125, 227, 217, 0.22), 0 0 28px rgba(125, 227, 217, 0.14)',
        'glow-sm': '0 0 10px rgba(255, 145, 1, 0.22)',
        'glow-md': '0 0 16px rgba(254, 99, 1, 0.26)',
        'glow-lg': '0 0 22px rgba(254, 99, 1, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
