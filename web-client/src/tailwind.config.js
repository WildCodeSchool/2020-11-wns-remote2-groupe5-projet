import { coolGray, lightBlue, rose, fuchsia } from 'tailwindcss/colors';

export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  container: {
    center: true,
  },
  colors: {
    //black
    primary: {
      main: '#1B262C',
      dark: '#000000',
      light: '#393E46',
    },
    //white
    secondary: {
      main: '#FFFFFF',
      dark: '#B8C1C6',
      light: '#E5E5E5',
    },
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      128: '32rem',
      144: '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
};
