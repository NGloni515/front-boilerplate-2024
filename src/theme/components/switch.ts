import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    // ...
  },
  thumb: {
    borderRadius: '6px',
  },
  track: {
    borderRadius: '10px',
    p: '5px',
  },
});

export const Switch: ComponentStyleConfig = defineMultiStyleConfig({
  baseStyle,
  sizes: {},
  variants: {},
  defaultProps: {},
});
