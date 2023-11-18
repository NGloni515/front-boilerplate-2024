import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '10px',
    lineHeight: '14px',
    padding: '5px 9px',
    textTransform: 'capitalize',
  },
  variants: {
    blue: {
      color: 'blue.600',
      bg: 'blue.200',
    },
  },
  defaultProps: {},
};
