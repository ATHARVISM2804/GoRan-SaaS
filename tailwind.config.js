/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        silver: '#C0C0C0',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hero-pulse': 'hero-pulse 6s ease-in-out infinite',
        'hero-pulse-reverse': 'hero-pulse-reverse 8s ease-in-out infinite',
        'hero-pulse-fast': 'hero-pulse-fast 4s ease-in-out infinite',
        'hero-float': 'hero-float 15s ease-in-out infinite',
        'hero-beam': 'hero-beam 20s linear infinite',
        'hero-particle': 'hero-particle 12s linear infinite',
        'hero-grid': 'hero-grid 40s linear infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'float-reverse': 'float-reverse 25s ease-in-out infinite',
        'float-particle': 'float-particle 15s linear infinite',
        'rotate-ray': 'rotate-ray 30s linear infinite',
        'grid-move': 'grid-move 60s linear infinite',
        'line-flow': 'line-flow 4s ease-in-out infinite',
        'shine-sweep': 'shine-sweep 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'gradient-shift': 'gradient-shift 20s ease-in-out infinite',
        'float-complex': 'float-complex 15s ease-in-out infinite',
        'particle-float': 'particle-float 12s linear infinite',
        'ray-rotate': 'ray-rotate 25s linear infinite',
      },
      keyframes: {
        'hero-pulse': {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1)', 
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.1)', 
            opacity: '1' 
          },
        },
        'hero-pulse-reverse': {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1.1)', 
            opacity: '0.6' 
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1)', 
            opacity: '0.9' 
          },
        },
        'hero-pulse-fast': {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(0.9)', 
            opacity: '0.4' 
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.2)', 
            opacity: '0.8' 
          },
        },
        'hero-float': {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'translate(20px, -30px) scale(1.1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translate(-15px, -50px) scale(0.9)',
            opacity: '1'
          },
          '75%': { 
            transform: 'translate(-25px, -20px) scale(1.05)',
            opacity: '0.7'
          },
        },
        'hero-beam': {
          '0%': { 
            opacity: '0',
            transform: 'rotate(0deg) scaleY(0)'
          },
          '10%': { 
            opacity: '1',
            transform: 'rotate(0deg) scaleY(1)'
          },
          '90%': { 
            opacity: '1',
            transform: 'rotate(360deg) scaleY(1)'
          },
          '100%': { 
            opacity: '0',
            transform: 'rotate(360deg) scaleY(0)'
          },
        },
        'hero-particle': {
          '0%': { 
            transform: 'translateY(0) rotate(0deg) scale(0)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1',
            transform: 'translateY(-20px) rotate(45deg) scale(1)'
          },
          '90%': { 
            opacity: '1',
            transform: 'translateY(-80vh) rotate(315deg) scale(1)'
          },
          '100%': { 
            transform: 'translateY(-100vh) rotate(360deg) scale(0)',
            opacity: '0'
          },
        },
        'hero-grid': {
          '0%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translate(40px, 40px) rotate(1deg)',
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translate(80px, 80px) rotate(0deg)',
            opacity: '1'
          },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(10px, -15px) scale(1.05)' },
          '50%': { transform: 'translate(-5px, -25px) scale(0.95)' },
          '75%': { transform: 'translate(-15px, -10px) scale(1.02)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-12px, 18px) scale(0.98)' },
          '50%': { transform: 'translate(8px, 30px) scale(1.03)' },
          '75%': { transform: 'translate(18px, 12px) scale(0.97)' },
        },
        'float-particle': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'rotate-ray': {
          '0%': { opacity: '0', transform: 'translate(-50%, -100%) rotate(0deg) scaleY(0)' },
          '10%': { opacity: '1', transform: 'translate(-50%, -100%) rotate(0deg) scaleY(1)' },
          '90%': { opacity: '1', transform: 'translate(-50%, -100%) rotate(0deg) scaleY(1)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -100%) rotate(0deg) scaleY(0)' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100px, 100px)' },
        },
        'line-flow': {
          '0%': { opacity: '0', transform: 'scaleY(0)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
          '100%': { opacity: '0', transform: 'scaleY(0)' },
        },
        'shine-sweep': {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          },
          '25%': { 
            transform: 'scale(1.05) rotate(1deg)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(0deg)',
            opacity: '0.9'
          },
          '75%': { 
            transform: 'scale(1.05) rotate(-1deg)',
            opacity: '0.8'
          },
        },
        'float-complex': {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
            filter: 'blur(48px)'
          },
          '25%': { 
            transform: 'translate(30px, -40px) scale(1.1) rotate(90deg)',
            filter: 'blur(52px)'
          },
          '50%': { 
            transform: 'translate(-20px, -60px) scale(0.9) rotate(180deg)',
            filter: 'blur(44px)'
          },
          '75%': { 
            transform: 'translate(-40px, -20px) scale(1.05) rotate(270deg)',
            filter: 'blur(50px)'
          },
        },
        'particle-float': {
          '0%': { 
            transform: 'translateY(0) rotate(0deg) scale(0)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1',
            transform: 'translateY(-20px) rotate(45deg) scale(1)'
          },
          '90%': { 
            opacity: '0.8',
            transform: 'translateY(-100vh) rotate(315deg) scale(0.8)'
          },
          '100%': { 
            transform: 'translateY(-120vh) rotate(360deg) scale(0)',
            opacity: '0'
          },
        },
        'ray-rotate': {
          '0%': { 
            opacity: '0.2',
            transform: 'rotate(0deg) scaleY(0.8)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'rotate(180deg) scaleY(1.2)'
          },
          '100%': { 
            opacity: '0.2',
            transform: 'rotate(360deg) scaleY(0.8)'
          },
        },
      },
      textShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
