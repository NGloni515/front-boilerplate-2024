import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

export const Card = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    body: {
      borderRadius: '20px',
      p: '0px 24px 0px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',
      minWidth: '0px',
      wordWrap: 'break-word',
      bg: '#ffffff',
      backgroundClip: 'border-box',
    },
  }),
  variants: {
    outline: definePartsStyle({
      container: {
        borderRadius: '15px',
        border: 'solid 1px #E0E2E6',
        p: '16px 15px 16px',
      },
      body: {
        p: '0px',
      },
    }),
    elevated: definePartsStyle({
      container: {
        borderRadius: '20px',
        boxShadow:
          '0px 1px 5px rgba(0, 0, 0, 0.03), -2px 4px 15px rgba(0, 0, 0, 0.06)',
      },
      body: {
        p: '10px 12px',
      },
    }),
    plain: definePartsStyle({
      container: {
        boxShadow: 'none',
      },
      body: {
        p: '10px 12px',
      },
    }),
  },
});
