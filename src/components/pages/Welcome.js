import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await response.json();

    // Navigate to the Explore page with the image URL
    navigate("/explore", { state: { imageUrl: data.imageUrl } });
  };

  return (
    <Flex direction="column" h="100vh" bg="red.100">
      {" "}
      <Flex flex="1" direction="column" justifyContent="center" align="center">
        <Text fontSize="4xl" as="b">
          Enter a place you would like to visit
        </Text>
      </Flex>
      <Flex justifyContent="center" align="center">
        <Input
          w="50vh"
          placeholder="Beach, Paris, Shopping Mall, etc."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Box w="5"></Box>
        <Button onClick={handleSubmit}>Go!</Button>
      </Flex>
      <Box flex="1"></Box>
    </Flex>
  );
};

export default Welcome;
