import { Box, Flex, Hide, Text } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* import { LoginHero } from '@/assets/images';
import MonedaLogo from '@/assets/logo-black.svg'; */
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
        <Flex direction="column" w={['100%', null, null, '50%']}>
          <Flex
            justify="space-between"
            pt="50px"
            px={['20px', null, '50px', null]}
          >
            {isLogin ? (
              <Text fontSize="sm" color="#848B99">
                Don&apos;t have an account?{' '}
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
        </Flex>
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
      </Flex>
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        flexGrow={1}
        gap={10}
        px={8}
        pb="20px"
        mt={['50px', null, '0px', null]}
      ></Flex>
    </>
  );
}

const RightContainer = ({ children }: { children: ReactNode }) => (
  <Hide below="lg">
    <Flex
      position="relative"
      h="95vh"
      w={[null, null, null, '50vw', null, '44vw']}
      direction="column"
      justify="center"
      align="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bg: `linear-gradient(140deg, #CDE0FE 17.89%, rgba(243, 248, 255, 0.30) 64.7%)`,
        width: '100%',
        height: '90%',
        zIndex: -1000,
        filter: 'brightness(0.8) contrast(2)',
        bgSize: 'cover',
        borderRadius: '0 0 0 50px',
      }}
    >
      {children}
    </Flex>
  </Hide>
);
