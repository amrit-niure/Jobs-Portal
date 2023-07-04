/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : { 
        light : {
            primary : '#861D88',
            secondary : "#AEB0B4",
            tertiary : '#F4F5F7',
            lightBackground : "#F4F5F7",
        },
        dark : { 
          // darkmode not configured
        }
      },
      screens: {
        'xsm': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
  
      },
      fontFamily: {
        myCustomFont: ['poppins', 'sans-serif'],
      },
      fontWeight :{
        thin : '300',
        regular : '400',
        semiBold : '500',
        bold : '600',
      }
    },

  },
  plugins: [],
}

