import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Divider,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { IconType } from 'react-icons';
import {
  MdLogout,
  MdOutlineHome,
  MdOutlineGroup,
  MdOutlineAccountBox,
  MdOutlineInsertChartOutlined,
  MdOutlineSettings,
} from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import Logo from '@/assets/default-logo.png';
import { NavLink } from '@/components/common';
import { useResponsive } from '@/hooks';
import { useLogout, useUser } from '@/libs/auth';

import { useDrawer } from './DrawerContext';

interface LinkType {
  name: string;
  path: string;
  icon?: IconType;
}

interface LinkParentType {
  name: string;
  parentPath: string;
  icon: IconType;
  children: LinkType[];
}

const linkGroup: (LinkType | LinkParentType)[] = [
  { name: 'Home', path: 'home', icon: MdOutlineHome },
  { name: 'Customers', path: 'customers', icon: MdOutlineGroup },
];

const myAccountLinks = {
  name: 'My Account',
  parentPath: 'my-account',
  icon: MdOutlineAccountBox,
  children: [
    { name: 'Settings', path: 'settings/logo', icon: MdOutlineSettings },
    { name: 'Balance', path: 'balance', icon: MdOutlineInsertChartOutlined },
  ],
};

function Sidebar() {
  return (
    <Flex
      flexDirection="column"
      bgColor="#F6F7F7"
      transition="0.2s linear"
      w={['320px', '320px', '300px']}
      h="100vh"
      m="0px"
      minH="100%"
      overflowX="hidden"
      boxShadow="14px 17px 40px 4px rgba(112, 144, 176, 0.08)"
    >
      <Flex px={5} my={5} align="stretch">
        <Image src={Logo} />
      </Flex>

      <Divider borderColor="gray.200" height="1px" />

      <Accordion
        allowToggle
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        flexGrow={1}
      >
        <VStack mt={8} spacing={0} px={5} flexGrow={1}>
          {linkGroup.map((linkElement) => (
            <Fragment key={linkElement.name}>
              {'children' in linkElement && (
                <LinkAccordion linkParent={linkElement} />
              )}
              {'path' in linkElement && <Link link={linkElement} />}
            </Fragment>
          ))}
        </VStack>
        <MyAccountAccordion linkParent={myAccountLinks} />
      </Accordion>
    </Flex>
  );
}

function LinkAccordion({ linkParent }: { linkParent: LinkParentType }) {
  const { name, parentPath, icon, children } = linkParent;

  const location = useLocation();
  const isActive = location.pathname.includes(`${parentPath}/`);

  return (
    <AccordionItem w="100%" p={1} pr={0} border={0}>
      <AccordionButton
        p={0}
        h="36px"
        _hover={{ bgColor: 'transparent' }}
        style={{ fontSize: '14px' }}
      >
        <LinkTitle icon={icon} isActive={isActive}>
          {name}
        </LinkTitle>
        <AccordionIcon ml="auto" mr={2} />
      </AccordionButton>
      <AccordionPanel pr={0} pl={4}>
        {children.map(({ name, path }) => {
          const linkWithParentPath = { name, path: `${parentPath}/${path}` };
          return (
            <Link key={linkWithParentPath.path} link={linkWithParentPath} />
          );
        })}
      </AccordionPanel>
    </AccordionItem>
  );
}

function Link({ link }: { link: LinkType }) {
  const { name, path, icon } = link;
  const { isMobile } = useResponsive();
  const { onClose } = useDrawer();

  return (
    <NavLink
      key={path}
      to={`/dashboard/${path}`}
      w="100%"
      style={{ fontSize: '14px' }}
      onClick={isMobile ? onClose : undefined}
    >
      {({ isActive }) => (
        <Flex justify="space-between" align="center" w="100%" p={1}>
          <LinkTitle icon={icon} isActive={isActive} isInner>
            {name}
          </LinkTitle>
          <Box h="36px" w="4px" bg={'transparent'} borderRadius="5px" ml={4} />
        </Flex>
      )}
    </NavLink>
  );
}

type LinkTitleType = {
  children: string;
  icon?: IconType;
  isActive?: boolean;
  isInner?: boolean;
};

function LinkTitle({ children, icon, isActive, isInner }: LinkTitleType) {
  return (
    <Flex align="center">
      {icon && (
        <Icon
          as={icon}
          width="20px"
          height="20px"
          mr={4}
          color={isActive ? 'blue.600' : 'gray.500'}
        />
      )}
      {isInner ? (
        <Text
          color={isActive ? 'blue.600' : 'gray.500'}
          fontWeight={600}
          textAlign="start"
        >
          {children}
        </Text>
      ) : (
        <Text
          color={isActive ? 'gray.900' : 'gray.500'}
          fontWeight={600}
          textAlign="start"
        >
          {children}
        </Text>
      )}
    </Flex>
  );
}

function MyAccountAccordion({
  linkParent,
}: {
  linkParent: Partial<LinkParentType>;
}) {
  const { parentPath, children } = linkParent;

  const user = useUser();
  const logout = useLogout();

  return (
    <AccordionItem w="100%" p={1} pr={0} border={0}>
      <AccordionButton p="25px" h="75px" _hover={{ bgColor: 'transparent' }}>
        <Flex
          h="40px"
          w="40px"
          border="solid"
          borderColor="gray.300"
          justify="center"
          align="center"
          borderRadius="10px"
          mr="10px"
        >
          {!user.data?.img?.includes('null') ? (
            <Image src={user?.data?.img} />
          ) : (
            user?.data?.email
          )}
        </Flex>
        <Flex flexDirection="column" align="flex-start" justify="space-between">
          <Text size="bodyText-1">{user?.data?.email}</Text>
          <Text size="paragraph-1" color="gray.400">
            {user?.data?.email}
          </Text>
        </Flex>
        <AccordionIcon ml="auto" mr={2} />
      </AccordionButton>
      <AccordionPanel pr={0} pl="25px">
        <Divider width="85%" mb="10px" />
        {children?.map(({ name, path, icon: childrenIcon }) => {
          const linkWithParentPath = {
            name,
            path: `${parentPath}/${path}`,
            icon: childrenIcon,
          };
          return (
            <Link key={linkWithParentPath.path} link={linkWithParentPath} />
          );
        })}
        <Flex onClick={() => logout.mutate({})} w="100%" p={1} cursor="pointer">
          <LinkTitle icon={MdLogout}>Log out</LinkTitle>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Sidebar;
