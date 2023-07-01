/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scale: {
          '0%,100%': { scale: '0.9' },
          '50%': { scale: '0.95' },
        },
        ping: {
          '0%,100%': { scale: '0.9' },
          '50%': { scale: '0.95' },
        },
      },
   
    },
    
    animation: {
      scale: 'scale 8s ease-in-out infinite',
      wiggle: 'wiggle 8s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
    }


  },
  plugins: []
}



