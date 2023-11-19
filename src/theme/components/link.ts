import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Link: ComponentStyleConfig = {
  baseStyle: {
    textDecoration: 'none',
    boxShadow: 'none',
    color: 'indigo.600',
    _focus: {
      boxShadow: 'none',
    },
    _hover: {
      textDecoration: 'none',
      border: 'none',
    },
  },
};
