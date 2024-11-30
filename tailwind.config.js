/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'blue': {
          100: '#D1F0FF',
          900: '#003456'
        },
        'orange': {
          50: '#FFF7F5',
          900: '#A15547'
        },
      },
      backgroundImage: {
        'header': "url('/img/header.jpg')",
        'texture': "url('/img/texture.png')",
        'circle-1': "url('/img/background-circle-1.svg')",
        'circle-2': "url('/img/background-circle-2.svg')",
        'circle-3': "url('/img/background-circle-3.svg')",
        'wave-3': "url('/img/background-wave-3.svg')",
        'leaf-1': "url('/img/background-leaf-1.svg')",
        'leaf-2': "url('/img/background-leaf-2.svg')",
        'leaf-3': "url('/img/background-leaf-3.svg')",
        'leaf-4': "url('/img/background-leaf-4.svg')",
        'leaf-5': "url('/img/background-leaf-5.svg')"
      },
      fontFamily: {
        'sans': ['raleway', 'ui-sans-serif', 'system-ui'],
        'serif': ['vidaloka', 'ui-serif', 'Georgia']
      }, 
      width: {
        'custom-87': '90%', 
    },
    },
  },
  plugins: [],
}

