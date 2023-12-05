import { Container, Flex } from '@chakra-ui/react';

export function Navbar() {
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        w="100%"
        backgroundColor="rgba(255, 
 255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
      >
        Navbar
      </Flex>
      <Container as="main" mt="20">
        ...
      </Container>
    </>
  );
}
