import { ComponentStyleConfig } from '@chakra-ui/react';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['dialog', 'header', 'body', 'footer']);

export const Drawer: ComponentStyleConfig = helpers.defineMultiStyleConfig({
  baseStyle: {},
  sizes: {
    md: {
      dialog: {
        maxW: '360px',
      },
    },
    lg: {
      dialog: {
        maxW: '550px',
      },
    },
  },
  variants: {
    floating: {
      dialog: {
        borderRadius: '10px',
        m: '25px',
      },
      header: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '30px',
        color: 'gray.800',
        borderBottom: 'solid',
        borderColor: 'gray.100',
        p: '25px',
      },
      body: {
        px: '0px',
      },
      footer: {
        borderTop: 'solid',
        borderColor: 'gray.100',
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  },
  defaultProps: {},
});
