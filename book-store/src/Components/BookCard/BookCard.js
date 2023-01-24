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
  Container,
} from "@chakra-ui/react";
import "./BookCard.css";

export default function BookCard(props) {
  return (
    <Container>
      <Card maxW="sm" boxShadow="xl">
        <CardBody>
          <Image
            src={`../images/${props.card.coverImg}`}
            alt={props.card.alt}
            borderRadius="lg"
            boxSize="400px"
          />
          <Stack mt="6" spacing="3">
            <Heading size="sm">{props.card.title}</Heading>
            <Text>{props.card.description}</Text>
          </Stack>
          <Divider color="#D9D9D9" mb="4" mt="4" />
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
              bgColor="#C4B8C6"
              color="white"
              size="md"
              pl="10"
              pr="10"
              mb="5"
              mt="5"
            >
              Read More
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}
