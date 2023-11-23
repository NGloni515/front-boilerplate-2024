import { Box, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useResponsive } from '@/hooks/useResponsive';

import { DrawerProvider } from './DrawerContext';
import { Footer } from './Footer';
import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const { isMobile } = useResponsive();

  const Layout = useMemo(
    () => (isMobile ? MobileLayout : DesktopLayout),
    [isMobile]
  );

  return (
    <DrawerProvider>
      <Layout>{children}</Layout>
    </DrawerProvider>
  );
}

const DesktopLayout = ({ children }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const hasPadding = !/home/.test(pathname) && !/settings/.test(pathname);

  return (
    <Flex minH="100vh">
      <Sidebar />
      <Flex
        direction="column"
        w="calc(100% - 300px)"
        maxH="100vh"
        overflowY="auto"
        bgColor="#FFFFFF"
      >
        <Box as="main" p={hasPadding ? 5 : 0} pb={14} flexGrow={1}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Flex>
  );
};

const MobileLayout = ({ children }: Props) => (
  <Flex minH="100vh" direction="column">
    <MobileSidebar />
    <Box as="main" p={5} pt={20} flexGrow={1}>
      {children}
    </Box>
    <Footer />
  </Flex>
);
