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
} from "@chakra-ui/react";
import { AuthErrorCodes } from "firebase/auth";
import { useGetBookWorksQuery } from "../../store/books/booksSlice";
import { useParams, useNavigate } from "react-router-dom";

export default function BookCard(props) {
  /* TODO: Length of titles and authors not responsive */
  /* Truncate long titles */

  function Title({ title }) {
    if (title.length > 38) {
      let str = "";
      for (let i = 0; i < 38; i++) {
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

  const param = useParams();
  const { data, isLoading, isError } = useGetBookWorksQuery(param);

  const navigate = useNavigate();
  const handleSelectCategory = (id) => {
    navigate(`${id}`);
  };

  return (
    <Card
      maxW="sm"
      boxShadow="xl"
      my={{ base: 5, md: 50 }}
      fontFamily="Poppins"
      fontSize="sm"
    >
      <CardBody>
        <Box height="45vh">
          {/* FIX: Display error message if no cover exists */}
          <Image
            src={`https://covers.openlibrary.org/b/id/${props.card.cover_id}-L.jpg`}
            alt=""
            borderRadius="lg"
            boxSize="45vh"
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="xs">
            {/* Shorten titles to fit on card */}
            <Title title={props.card.title} />
          </Heading>
        </Stack>
        <Divider mt="3" mb="5" borderColor="#D9D9D9" />
        <Grid templateRows="repeat(2, 1fr)" gap={2} mb="5">
          <GridItem w="100%" h="5">
            <HStack>
              <Box width="15vw">
                <Text color="#61625F">Author</Text>
              </Box>
              <Text color="#61625F">Price</Text>
            </HStack>
          </GridItem>
          <GridItem w="100%" h="5">
            <HStack>
              <Box width="15vw">
                <Text as="b" fontSize="xs">
                  {/* Shorten author names to fit on card */}
                  <Author author={props.card.authors[0].name} />
                </Text>
              </Box>
              <Text as="b">
                {/* TODO: sync up prices for each book across the entire site */}
                ${(Math.random() * (25 - 10) + 10).toFixed(2)}
              </Text>
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
            onClick={() => handleSelectCategory(props.card.key)}
            id={props.card.key}
          >
            {/* TODO: connect with BookPage */}
            More Details
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
