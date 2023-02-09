import React from "react";
import data from "../data/data";
import Counter from "../Counter/Counter";
import { props } from "./types";
import {
  Stack,
  HStack,
  Container,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  Image,
  Button,
  chakra,
} from "@chakra-ui/react";

export default function ProductDetails(props: props) {
  return (
    <Container maxW="1400px" mb="100px" fontFamily="Poppins">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "0", sm: "24px" }}
        alignItems="center"
      >
        <Box
          bg="white"
          rounded="sm"
          w={{ base: "100%", md: "50%" }}
          mb={{ base: "25px", md: "0" }}
        >
          <Card
            maxW="sm"
            boxShadow="xl"
            my={{ base: 5, md: 50 }}
            fontFamily="Poppins"
          >
            <CardBody>
              <Image
                src={`../images/${data[0].coverImg}`}
                alt={data[0].alt}
                borderRadius="lg"
                boxSize="100%"
              />
            </CardBody>
          </Card>
        </Box>
        <Box
          bg="white"
          rounded="sm"
          w={{ base: "100%", md: "50%" }}
          mb={{ base: "25px", md: "0" }}
        >
          <Heading fontSize="40px" fontWeight="600" fontFamily="Poppins">
            {props.title}
          </Heading>
          <Text fontSize="20px" lineHeight={1.5} fontWeight="300">
            {props.authors}
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            flexWrap="wrap"
            alignItems={{ base: "center", md: "left" }}
            justifyContent={{ base: "center", md: "left" }}
            py="15px"
          >
            <Image src="../images/review-rating.png" boxSize="20%"></Image>
            <Text pl="5px">5.0 (27)</Text>
          </HStack>
          <Divider
            orientation="horizontal"
            borderColor="#D9D9D9"
            mt="10px"
            mb="40px"
          />

          <Text my={6} fontSize="25px">
            $49.99
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            flexWrap="wrap"
            alignItems={{ base: "center", md: "left" }}
            justifyContent={{ base: "center", md: "left" }}
            mb={5}
          >
            <Counter />
            <Button
              h={12}
              px={8}
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
              fontWeight="400"
              letterSpacing="2px"
            >
              Add to Cart
            </Button>
          </HStack>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            flexWrap="wrap"
            alignItems={{ base: "center", md: "left" }}
            justifyContent={{ base: "center", md: "left" }}
            mb={10}
          >
            <Image src="../images/delivery-truck.png" h="70px"></Image>
            <Text>
              <chakra.span as="b">Approximate delivery</chakra.span> on
              Thursday, January 19th
            </Text>
          </HStack>
          <Stack>
            <Box
              borderRadius="md"
              borderWidth="1px"
              borderColor="#D9D9D9"
              p="10px"
              mt="20px"
            >
              <HStack
                spacing="20"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
              >
                <Text mr="10">Share with friends</Text>
                <Text>Save to wishlist</Text>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
