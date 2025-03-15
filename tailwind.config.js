/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      screens: {
        'mini': '601px',
      },
      transitionDelay: {
        'cs-Delay': 'calc(0.1s * var(--de-lay))'
      },
      fontFamily: {
        'pt-sans': 'PT Sans Caption, sans-serif',
        'jose-sans': 'Josefin Sans, sans-serif',
      },
      gridTemplateRows: {
        'Row_mxmd': '40% 30%',
      },
      width: {
        'impWidth': '100% !important',
        'imgWidth-vh': 'clamp(20rem, 3vw, 60rem)',
        'imgWidth-vw': 'clamp(20rem, 3vw, 60rem)',
        'AbImg-vw': 'clamp(13rem, 3vw, 60rem)',
        'svgWidth-vw': 'clamp(3rem, 5vw, 3.5rem)',
      },
      fontSize: {
        'fontSize-md-h1': 'calc(0.8rem + 1.5vw + .4vh)',
        'fontSize-md': 'calc(0.4rem + 1.5vw + .4vh)',
        'fontSize-sm': 'calc(0.3rem + 1.5vw + .4vh)',
        'fontSize-x-sm': 'calc(0.1rem + 1.2vw + .2vh)',
        'fontSize-xl': 'calc(0.5rem + 1.5vw + .4vh)',
        'fontSize-lg': 'calc(0.3rem + 1vw + .5vh)',
        'fontSize-lg-mxmd': 'calc(0.4rem + 1.1vw)',
        'fontSize-mxmd': 'calc(0.5rem + 1.4vh)',
      },
      backgroundColor: {
        'bg-conic-re': 'repeating-conic-gradient(from var(--b), red 0%, red 5%, transparent 5%, transparent 45%, red 50%);',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-single': 'spin 1s linear',
        'spin-single-reverse': 'spin-reverse 1s linear',
        'animate-top': 'slide-in-blurred-top 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-top': 'slide-in-top 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-bottom': 'slide-in-bottom 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-right': 'slide-in-right-r 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-right-n': 'slide-in-right 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-left': 'slide-in-left-r 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-left-n': 'slide-in-left 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'animate-opc': 'slide-in-opc 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'animate-opc-1': 'slide-in-opc-1 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'animate-opc-2': 'slide-in-opc-2 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'myAni': 'myAnime 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'myAni-md': 'myAnime_md 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'myAni_1': 'myAnime_1 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'myAni-slide-top': 'slide-top 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'myAni-slide-top-cs': 'slide-top-cs 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'line-ani-h': 'line-anime-h 3s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'line-ani-w': 'line-anime-w 3s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'typing': 'typing 3s steps(25, end) forwards, blink 1s step-end infinite',
        'typing-delayed': 'typing 3.5s steps(40, end) 1s forwards, blink 0.75s step-end infinite',

      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#f87171' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'spin-reverse': {
          'to': { transform: 'rotate(-360deg)' },
        },
        'slide-in-blurred-top': {
          '0%': {
            'transform': ' translateY(-1000px) scaleY(2.5) scaleX(0.2)',
            'transform-origin': '50% 0%',
            'filter': ' blur(40px)',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateY(0) scaleY(1) scaleX(1)',
            'transform-origin': '50% 50%',
            'filter': 'blur(0)',
            'opacity': '1',
          },
        },
        'slide-in-opc-1': {
          '0%': {
            'opacity': '0',
            'transform': 'scale(0)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'scale(1)'

          },
        },
        'slide-in-opc-2': {
          '0%': {
            'opacity': '0',
            'transform': 'scale(0)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'scale(1)'

          },
        },
        'slide-in-opc': {
          '0%': {
            'opacity': '0',
          },
          '100%': {
            'opacity': '1',

          },
        },
        'slide-in-top': {
          '0%': {
            'transform': ' translateY(-1000px)',
            'transform-origin': '50% 0%',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateY(0)',
            'transform-origin': '50% 50%',
            'opacity': '1',
          },
        },
        'slide-in-bottom': {
          '0%': {
            'transform': ' translateY(1000px)',
            'transform-origin': '50% 0%',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateY(0)',
            'transform-origin': '50% 50%',
            'opacity': '1',
          },
        },
        'slide-in-right-r': {
          '0%': {
            'transform': ' translateY(-1000px)',
            'transform-origin': '50% 0%',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateY(0)',
            'transform-origin': '50% 50%',
            'opacity': '1',
            'rotate': '90deg',
          },
        },
        'slide-in-left-r': {
          '0%': {
            'transform': ' translateY(-1000px)',
            'transform-origin': '50% 0%',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateY(0)',
            'transform-origin': '50% 50%',
            'opacity': '1',
            'rotate': '-90deg',
          },
        },

        'slide-in-right': {
          '0%': {
            'transform': ' translateX(1000px)',
            'transform-origin': '50% 0%',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateX(0)',
            'transform-origin': '50% 50%',
            'opacity': '1',
          },
        },
        'slide-in-left': {
          '0%': {
            'transform': ' translateX(-1000px)',
            'transform-origin': '50% 0%',
            'opacity': '0',
          },
          '100%': {
            'transform': 'translateX(0)',
            'transform-origin': '50% 50%',
            'opacity': '1',
          },
        },
        'myAnime': {
          '0%': {
            'height': '0',
            'opacity': '0',
          },
          '50%': {
            'height': '20px',
            'opacity': '0',
          },
          '100%': {
            'height': '70%',
            'opacity': '1',
          },
        },
        'myAnime_md': {
          '0%': {
            'height': '0',
            'opacity': '0',
          },
          '50%': {
            'height': '20px',
            'opacity': '0',
          },
          '100%': {
            'height': '80%',
            'opacity': '1',
          },
        },
        'myAnime_1': {
          '0%': {
            'width': '0',
            'opacity': '0',
          },
          '50%': {
            'width': '20px',
            'opacity': '0',
          },
          '100%': {
            'width': '50%',
            'opacity': '1',
          },
        },
        'slide-top': {
          '0%': {
            'transform': 'translateY(-1000px)',
            'opacity': '0',

          },
          '100%': {
            'transform': 'translateY(0)',
            'opacity': '1',
          }
        },
        'slide-top-cs': {
          '0%': {
            'transform': 'translateX(-1000px)',
            'opacity': '0',

          },
          '100%': {
            'transform': 'translateY(-50%) translateX(50%)',
            'opacity': '1',
          }
        },
        'line-anime-h': {
          '0%': {
            'height': '0'
          },
          '100%': {
            'height': '780px',
            'border-radius': '1000px'
          }
        },
        'line-anime-w': {
          '0%': {
            'width': '0'
          },
          '100%': {
            'width': '800px',
          }
        },
      }
    },
  },
  plugins: [],
}
