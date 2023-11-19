import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Modal: ComponentStyleConfig = {
  baseStyle: {
    dialog: {
      borderRadius: '16px',
      boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
    },
    body: { p: '24px 20px' },
  },
};
