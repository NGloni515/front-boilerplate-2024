import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { MdMenu } from 'react-icons/md';

import Logo from '@/assets/default-logo.png';

import { useDrawer } from './DrawerContext';
import Sidebar from './Sidebar';

export default function MobileSidebar() {
  const { isOpen, onOpen, onClose } = useDrawer();
  const btnRef = useRef(null);

  return (
    <>
      <NavBar btnRef={btnRef} onOpen={onOpen}></NavBar>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Sidebar />
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavBar = ({
  btnRef,
  onOpen,
}: {
  btnRef: React.MutableRefObject<null>;
  onOpen: () => void;
}) => (
  <Flex
    as="header"
    justify="space-between"
    align="center"
    position="fixed"
    w="100%"
    h={14}
    p={2}
    px={4}
    zIndex={10}
    bgColor="white"
  >
    <Image src={Logo} />

    <IconButton
      ref={btnRef}
      onClick={onOpen}
      variant="outline"
      aria-label="menu"
      icon={<MdMenu />}
    />
  </Flex>
);
