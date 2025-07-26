/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#ffffff',
          light: '#f8fafc',
          dark: '#0a0a0a',
          charcoal: '#1a1a1a',
          gray: '#2a2a2a',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          red: '#dc2626',
          orange: '#ea580c',
          gold: '#f59e0b',
          yellow: '#eab308',
        },
        text: {
          white: '#ffffff',
          light: '#f3f4f6',
          gray: '#9ca3af',
          dark: '#1f2937',
        }
      },
      fontFamily: {
        'fighter': ['Inter', 'Roboto', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'kudo': ['Orbitron', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-red': 'pulseRed 2s infinite',
        'pulse-blue': 'pulseBlue 2s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'kudo-kick': 'kudoKick 1.5s ease-in-out infinite',
        'kudo-punch': 'kudoPunch 1.2s ease-in-out infinite',
        'kudo-block': 'kudoBlock 0.8s ease-in-out infinite',
        'loader-spin': 'loaderSpin 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        kudoKick: {
          '0%': { transform: 'rotate(0deg) translateX(0)' },
          '25%': { transform: 'rotate(45deg) translateX(10px)' },
          '50%': { transform: 'rotate(90deg) translateX(20px)' },
          '75%': { transform: 'rotate(45deg) translateX(10px)' },
          '100%': { transform: 'rotate(0deg) translateX(0)' },
        },
        kudoPunch: {
          '0%': { transform: 'translateX(0) scale(1)' },
          '25%': { transform: 'translateX(5px) scale(1.1)' },
          '50%': { transform: 'translateX(15px) scale(1.2)' },
          '75%': { transform: 'translateX(5px) scale(1.1)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
        kudoBlock: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-5px) rotate(-15deg)' },
          '50%': { transform: 'translateX(-10px) rotate(-30deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        },
        loaderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 