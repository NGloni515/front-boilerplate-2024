import { Box } from '@chakra-ui/react';
import React from 'react';

import { AvatarBox } from './AvatarBox';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Sidebar = ({ collapse }: { collapse: any }) => (
  <React.Fragment>
    <Box w="full">
      <Logo collapse={collapse} />
      <Navigation collapse={collapse} />
      <AvatarBox collapse={collapse} />
    </Box>
  </React.Fragment>
);
