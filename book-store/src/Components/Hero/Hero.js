import React from "react";
import { chakra, Stack, HStack, Text, Box } from "@chakra-ui/react";

import "./Hero.css";

export default function Hero() {
  return (
    <Stack
      p={{ base: 5, md: 10 }}
      direction={{ base: "column", md: "row" }}
      bgImage={{
        base: "url(../images/BookTown-Hero-Tablet-768px.png)",
        md: "url(../images/BookTown-Hero.png)",
      }}
      backgroundSize={{ base: "100%", md: "100%" }}
      backgroundPosition="center right"
      backgroundRepeat="no-repeat"
      minH={{ base: "600px", md: "700px" }}
    >
      <Box
        bgGradient={{
          base: "linear-gradient(to-r, #fff 1%, #fff 1%)",
          md: "none",
        }}
        position="absolute"
        top="0"
        left="4"
        width="800px"
        height="650px"
        zIndex="0"
        opacity="0.6"
      ></Box>
      <Stack
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="center"
        spacing={6}
        maxW="550px"
      >
        <Text
          fontSize="1.2rem"
          textAlign={{ base: "center", md: "left" }}
          lineHeight="2"
          fontWeight="400"
          color={{ base: "black", md: "#bababa" }}
          mt={{ base: 20, md: 0 }}
          pt={{ base: 20, md: 0 }}
        >
          Sale up to 20% off
        </Text>
        <chakra.h1
          fontSize={{ base: "3xl", sm: "5xl" }}
          lineHeight={1}
          fontWeight="light"
          textAlign={{ base: "center", md: "left" }}
        >
          <chakra.div>Meet Your Next</chakra.div>
          <chakra.div as="i">Favorite Book</chakra.div>
        </chakra.h1>

        <HStack
          spacing={{ base: 0, sm: 2 }}
          flexWrap="wrap"
          alignItems={{ base: "center", md: "left" }}
          justifyContent={{ base: "center", md: "left" }}
        >
          <chakra.button
            h={12}
            px={10}
            color="white"
            variant="solid"
            fontSize="lg"
            rounded="sm"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            bg="#E4573D"
            _hover={{ bg: "#DC5E47" }}
          >
            Explore Now
          </chakra.button>
        </HStack>
      </Stack>
    </Stack>
  );
}
