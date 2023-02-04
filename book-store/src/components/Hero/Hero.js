import React from "react";
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import "./Hero.css";

export default function Hero() {
  return (
    <Stack
      p={{ base: 5, md: 10 }}
      mb={{ base: 0, lg: 40, md: 0 }}
      direction={{ base: "column", md: "row" }}
      bgImage={{
        base: "url(../images/hero-banners/BookTown-Hero-Tablet-768px.png)",
        md: "url(../images/hero-banners/BookTown-Hero-Desktop.png)",
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
        opacity="0.7"
      ></Box>
      <Stack
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="center"
        spacing={6}
        maxW="550px"
        alignItems="center"
      >
        <Image
          src="../images/bestseller-icon.png"
          w="120px"
          mt={{ base: 20, md: 0 }}
          pt={{ base: 10, md: 0 }}
        ></Image>
        <Text
          fontSize="1.3rem"
          textAlign={{ base: "center", md: "left" }}
          lineHeight="2"
          fontWeight="400"
          fontFamily="Poppins"
          color={{ base: "#606465", md: "#bababa" }}
        >
          Sale up to 20% off
        </Text>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight={1.2}
          fontWeight="400"
          textAlign={{ base: "center", md: "left" }}
          fontFamily="Libre Baskerville"
        >
          <chakra.div>Meet Your Next</chakra.div>
          <chakra.div as="i">Favorite Book</chakra.div>
        </Heading>

        <HStack
          spacing={{ base: 0, sm: 2 }}
          flexWrap="wrap"
          alignItems={{ base: "center", md: "left" }}
          justifyContent={{ base: "center", md: "left" }}
        >
          <Button
            h={16}
            px={12}
            color="white"
            variant="outline"
            borderColor="#E4573D"
            fontSize="lg"
            rounded="sm"
            mb={{ base: 2, sm: 0 }}
            lineHeight="20px"
            bg="#E4573D"
            _hover={{
              bg: "white",
              color: "#E4573D",
            }}
            fontFamily="Poppins"
            fontWeight="bold"
            letterSpacing="2px"
          >
            Explore Now
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
}
