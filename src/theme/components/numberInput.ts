import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys);

import { Input } from '@/theme/components/input';

const xl = defineStyle({
  fontSize: '24px',
  lineHeight: '24px',
  h: '60px',
  px: '2',
});

const md = defineStyle({
  fontSize: '14px',
  lineHeight: '18px',
});

const sizes = {
  xl: definePartsStyle({ field: xl, stepper: xl, addon: xl }),
  md: definePartsStyle({ field: md, stepper: md, addon: md }),
};

export const NumberInput = defineMultiStyleConfig({
  baseStyle: {
    ...Input.baseStyle,
    field: {
      fontWeight: 400,
      borderRadius: '10px',
    },
  },
  variants: {
    ...Input.variants,
    outline: {
      field: {
        bg: 'transparent',
        border: '1px solid',
        color: 'gray.700',
        borderColor: 'gray.200',
        _placeholder: { color: 'gray.600' },
      },
    },
  },
  sizes,
  defaultProps: {
    variant: 'outline',
  },
});
