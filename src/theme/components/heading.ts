import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Heading: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    h1: {
      fontSize: '74px',
      lineHeight: '80px',
    },
    h2: {
      fontSize: '64px',
      lineHeight: '70px',
    },
    h3: {
      fontSize: '54px',
      lineHeight: '60px',
    },
    h4: {
      fontSize: '44px',
      lineHeight: '50px',
    },
    h5: {
      fontSize: '36px',
      lineHeight: '40px',
    },
  },
  defaultProps: {},
};
