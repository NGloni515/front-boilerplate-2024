import { Flex, FlexProps, Spinner } from '@chakra-ui/react';

export const FullScreenSpinner = (props: FlexProps) => (
  <Flex h="100%" justify="center" align="center" {...props}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="blue.100"
      color="blue.600"
      size="xl"
    />
  </Flex>
);
