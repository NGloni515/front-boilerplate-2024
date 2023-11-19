import { extendTheme } from '@chakra-ui/react';

import * as additions from '@/theme/additions';
import * as components from '@/theme/components';
import { globalStyles } from '@/theme/styles';

const overrides = {
  ...globalStyles,
  components: {
    ...components,
    ...additions,
  },
};

export default extendTheme(overrides);
