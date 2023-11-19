import { Box, Flex, Hide, Text } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { NavLink } from '@/components';
import { Head } from '@/components/common/Head';
import { useUser } from '@/libs/auth';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function AuthLayout({ children, title, description }: Props) {
  const { data: user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isLogin = /login/.test(pathname);

  useEffect(() => {
    if (user?.id && pathname !== '/confirm-email') {
      navigate('/dashboard/home');
    }
  }, [user?.id]);

  return (
    <>
      <Head title={title} description={description} />
      <Flex>
        <RightContainer>
          <Flex
            align="center"
            justify="center"
            flexGrow={4}
            direction="column"
            px="140px"
            textAlign={'center'}
          ></Flex>
        </RightContainer>
        <Flex direction="column" w={['100%', null, null, '65%']}>
          <Flex
            justify="space-between"
            pt="50px"
            px={['20px', null, '50px', null]}
          >
            {isLogin ? (
              <Text fontSize="sm" color="#848B99">
                Don&apos;t have an account yet?{' '}
                <NavLink to="/sign-up">Sign Up</NavLink>
              </Text>
            ) : (
              <Text fontSize="sm" color="#848B99">
                Do you already have an account?{' '}
                <NavLink to="/login">Login</NavLink>
              </Text>
            )}
          </Flex>
          <Flex
            grow={1}
            justify="center"
            align="center"
            py={['30px', null, null, '0px']}
          >
            <Box w={[null, '420px']}>{children}</Box>
          </Flex>
          <Text size="paragraph-1" color="gray.600">
            &nbsp; Copyright © 2023 Skuldev
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

const RightContainer = ({ children }: { children: ReactNode }) => (
  <Hide below="lg">
    <Flex
      position="relative"
      h="100vh"
      w={[null, null, null, '35vw', null, '30vw']}
      direction="column"
      justify="center"
      align="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: `linear-gradient(140deg, #7303c0 1%, rgba(142, 45, 226, 0.02))`,
        width: '100%',
        height: '100%',
        zIndex: -1000,
        filter: 'brightness(0.8) contrast(2)',
        bgSize: 'cover',
      }}
    >
      {children}
    </Flex>
  </Hide>
);
