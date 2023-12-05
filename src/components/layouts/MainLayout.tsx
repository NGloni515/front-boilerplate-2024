import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { MdMenu } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import { useResponsive } from '@/hooks/useResponsive';

import { DrawerProvider } from './DrawerContext';
import { Footer } from './Footer';
import MobileSidebar from './MobileSidebar';
import { Sidebar } from './Sidebar/SidebarRaw';

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
  const [collapse, setCollapse] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const hasPadding = !/home/.test(pathname) && !/settings/.test(pathname);

  return (
    <HStack w="full" h="100vh" bg="gray.100">
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        position={'relative'}
      >
        <IconButton
          aria-label="Menu collapse"
          icon={<MdMenu />}
          position={'absolute'}
          top={2}
          left={2}
          onClick={() => setCollapse(!collapse)}
        />
        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </HStack>
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
