import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Select: ComponentStyleConfig = {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: '10px',
    },
    icon: {
      width: '1rem',
      height: '1rem',
      border: '1px solid',
      borderColor: 'gray.700',
      borderRadius: 'full',
    },
  },
  variants: {
    outline: {
      field: {
        bg: 'transparent',
        border: '1px solid',
        color: 'gray.700',
        borderColor: 'gray.200',
        fontSize: '14px',
        lineHeight: '18px',
        _placeholder: { color: 'gray.600' },
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
};
