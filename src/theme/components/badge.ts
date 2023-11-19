import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '10px',
    lineHeight: '14px',
    padding: '5px 9px',
    textTransform: 'capitalize',
  },
  variants: {
    indigo: {
      color: 'indigo.600',
      bg: 'indigo.200',
    },
  },
  defaultProps: {},
};
