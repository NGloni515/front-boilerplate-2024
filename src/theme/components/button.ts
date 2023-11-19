import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '10px',
    transition: '.25s all ease',
    boxSizing: 'border-box',
  },
  variants: {
    solid: {
      fontSize: '14px',
      bg: 'indigo.600',
      color: 'white',
      _active: {
        bg: 'indigo.600',
      },
      _hover: {
        bg: 'indigo.600',
        _disabled: {
          bg: 'indigo.600',
        },
      },
    },
    outline: {
      fontSize: '14px',
      borderColor: 'gray.400',
    },
    action: {
      fontSize: '14px',
      borderRadius: '50px',
      bg: 'secondaryGray.300',
      color: 'indigo.600',
      _active: { bg: 'secondaryGray.300' },
      _hover: {
        bg: 'secondaryGray.200',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
};
