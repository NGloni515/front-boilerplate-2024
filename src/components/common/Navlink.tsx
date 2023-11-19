import { chakra } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

export const NavLink = chakra(RouterLink, {
  baseStyle: {
    color: 'blue.600',
    fontWeight: 600,
    fontSize: 14,
  },
});
