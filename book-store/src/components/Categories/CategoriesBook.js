import React from "react";
import {
  Box,
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
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import generateBookPrice from "../../utils/pricing/generateBookPrice";

export default function BookCard(props) {
  const navigate = useNavigate();

  /* Truncate long titles */
  function Title({ title }) {
    if (title.length > 33) {
      let str = "";
      for (let i = 0; i < 33; i++) {
        str += title[i];
      }
      str += "...";
      return str;
    } else {
      return title;
    }
  }

  /* Truncate long author names */
  function Author({ author }) {
    if (author.length > 20) {
      let str = "";
      for (let i = 0; i < 19; i++) {
        str += author[i];
      }
      str += "...";
      return str;
    } else {
      return author;
    }
  }

  /* Display error message if no cover is found */
  function BookCover({ coverId }) {
    if (coverId) {
      return (
        <Image
          src={`https://covers.openlibrary.org/b/id/${props.card.cover_id}-L.jpg`}
          alt=""
          borderRadius="lg" // sets image clarity (S=blurry, L=HD)
          boxSize="400px" // sets image height
        />
      );
    } else {
      return (
        <Box
          w="250px"
          h="400px"
          align-items="center"
          bg="gray.100"
          border="solid"
          borderRadius="lg"
          borderColor="gray.200"
          borderWidth="1"
        >
          <Text fontSize="4xl" mt="120px" textColor="gray.300">
            Cover not available
          </Text>
        </Box>
      );
    }
  }

  /* Formula to generate price from book title */
  function GetBookPrice({ title }) {
    let sumOfAscii = 0;
    for (var i = 0; i < title.length; i++) {
      sumOfAscii += title.charCodeAt(i);
    }
    /* If title is undefined or non-English */
    if (sumOfAscii == 0) {
      sumOfAscii = 1000;
    }

    /* We want prices to be $10-25 */
    while (sumOfAscii < 1000) {
      sumOfAscii += 1000;
    }
    while (sumOfAscii > 2500) {
      sumOfAscii -= 1000;
    }
    return (sumOfAscii / 100).toFixed(2); // keep trailing zeros
  }

  return (
    <Flex justify-content="space-evenly">
      {/* Need align center in Box for image */}
      <Box w="300px" align="center">
        <Card
          maxW="sm"
          boxShadow="xl"
          my={{ base: 5, md: 50 }}
          fontFamily="Poppins"
          fontSize="sm"
        >
          <CardBody>
            <BookCover coverId={props.card.cover_id} />
            {/* Set box width for author and price */}
            <Box w="250px">
              <Stack mt="6" spacing="3">
                <Heading size="sm" align="left" noOfLines={1}>
                  {/* Shorten titles to fit on card */}
                  <Title title={props.card.title} />
                </Heading>
                <Text noOfLines={1} align="left">
                  {props.card.subject[0]}
                </Text>
              </Stack>
              <Divider mt="3" mb="5" borderColor="#D9D9D9" />
              <Grid templateRows="repeat(2, 1fr)" gap={2} mb="5">
                <GridItem w="100%" h="5">
                  <HStack>
                    {/* Author should take up ~75% of box width */}
                    <Box width="195px" align="left">
                      <Text color="#61625F">Author</Text>
                    </Box>
                    <Text color="#61625F">Price</Text>
                  </HStack>
                </GridItem>
                <GridItem w="100%" h="5">
                  <HStack>
                    {/* Author should take up ~75% of box width */}
                    <Box width="195px" align="left">
                      <Text as="b" fontSize="sm">
                        {/* Shorten author names to fit on card */}
                        <Author
                          author={
                            props.card.authors[0]
                              ? props.card.authors[0].name
                              : "No author data available"
                          }
                        />
                      </Text>
                    </Box>
                    <Text as="b">${generateBookPrice(props.card.title)}</Text>
                  </HStack>
                </GridItem>
              </Grid>
              <Stack align="center">
                <Button
                  bgColor="white"
                  color="#E4573D"
                  colorScheme="E4573D"
                  size="sm"
                  rounded="sm"
                  px="12"
                  py="6"
                  mt="2"
                  variant="outline"
                  _hover={{ bg: "#E4573D", color: "white" }}
                  letterSpacing="2px"
                  onClick={(e) => {
                    const justKey = props.bookKey.replace("/works", "");
                    navigate("/book" + justKey);
                  }}
                >
                  More Details
                </Button>
              </Stack>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
}
