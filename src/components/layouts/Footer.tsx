import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex pb={6} px={10} justify="space-between">
      <Flex>
        <Text size="paragraph-1" color="gray.600">
          App
        </Text>
      </Flex>
      <Flex gap={10}></Flex>
    </Flex>
  );
}
