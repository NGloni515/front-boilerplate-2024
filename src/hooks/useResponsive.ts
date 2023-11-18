import { useMediaQuery } from '@chakra-ui/react';

export function useResponsive() {
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  return { isMobile };
}
