import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  Image,
  Stack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import "./BookCard.css";

export default function BookCard(props) {
  return (
    <Card
      maxW="sm"
      boxShadow="xl"
      my={{ base: 5, md: 50 }}
      fontFamily="Poppins"
    >
      <CardBody>
        <Image
          src={`../images/${props.card.coverImg}`}
          alt={props.card.alt}
          borderRadius="lg"
          boxSize="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{props.card.title}</Heading>
          <Text>{props.card.description}</Text>
        </Stack>
        <Divider my="6" borderColor="#D9D9D9" />
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={2}
          mb="5"
        >
          <GridItem w="100%" h="5">
            <Text ml="3" color="#61625F">
              Author
            </Text>
          </GridItem>
          <GridItem w="100%" h="5">
            <Text ml="20" color="#61625F">
              Price
            </Text>
          </GridItem>
          <GridItem w="100%" h="5">
            <Text as="b" ml="3">
              {props.card.author}
            </Text>
          </GridItem>
          <GridItem w="100%" h="5">
            <Text ml="20" as="b">
              ${props.card.price}
            </Text>
          </GridItem>
        </Grid>
        <Stack align="center">
          <Button
            bgColor="white"
            color="#E4573D"
            colorScheme="E4573D"
            size="md"
            rounded="sm"
            px="12"
            py="6"
            my="5"
            variant="outline"
            _hover={{ bg: "#E4573D", color: "white" }}
            letterSpacing="2px"
          >
            Read More
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
