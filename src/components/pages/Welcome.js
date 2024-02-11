import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Button,
  Input,
} from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Flex direction="column" h="100vh" bg="red.100">
      {" "}
      <Flex flex="1" direction="column" justifyContent="center" align="center">
        <Text fontSize="4xl" as="b">
          Enter a place you would like to visit
        </Text>
      </Flex>
      <Flex justifyContent="center" align="center">
        <Input w="50vh" placeholder="Beach, Paris, Shopping Mall, etc."></Input>
        <Box w="5"></Box>
        <Button>Go!</Button>
      </Flex>
      <Box flex="1"></Box>
    </Flex>
  );
};

export default Welcome;