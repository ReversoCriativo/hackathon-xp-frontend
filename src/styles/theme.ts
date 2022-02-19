import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#000000',
    text: '#ffffff',
    onBoarding: {
      'background': '#090909'
    },
    variants: {
      'danger': '#DA3633',
      'alert': '#FFAC00'
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'lg',
        fontWeight: 'normal',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'linear-gradient(90deg, #DA3633 -0.1%, #D29922 100%)',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'onBoarding.background',
        color: 'text',
      },
    },
  },
});