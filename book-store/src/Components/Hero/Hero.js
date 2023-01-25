import React from "react";
import {
  Box,
  Center,
  Image,
  Container,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW="1400px">
      <Box bg="#7d94d1" w="100%" p={3} color="white">
        <Center>LIMITED TIME OFFER - 50% OFF ALL BOOKS WITH SOFT COVERS</Center>
      </Box>
      <Box mb="20">
        <Image position="relative" src="../images/main-image.png" alt="books" />
      </Box>
    </Container>
  );
}
