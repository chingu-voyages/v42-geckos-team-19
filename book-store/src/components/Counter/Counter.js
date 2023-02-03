import React, { useState } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <Box
      borderRadius="sm"
      borderWidth="1px"
      borderColor="#F8F8F8"
      fontFamily="Poppins"
      h={12}
      mr={6}
    >
      <HStack
        spacing={{ base: 0, sm: 2 }}
        flexWrap="wrap"
        alignItems={{ base: "center", md: "left" }}
        justifyContent={{ base: "center", md: "left" }}
      >
        <Button h={12} px={6} rounded="none" bg="#F8F8F8" onClick={subtract}>
          –
        </Button>
        <Box px={5}>
          <Text>{count}</Text>
        </Box>
        <Button px={6} h={12} rounded="none" bg="#F8F8F8" onClick={add}>
          +
        </Button>
      </HStack>
    </Box>
  );
}
