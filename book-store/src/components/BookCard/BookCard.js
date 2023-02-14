import React from "react";
import {
  useGetWorkByIdQuery,
  useGetAuthorByIdQuery,
} from "../../store/books/booksSlice";
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
  Box,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";

export default function BookCard({ workId }) {
  const { data, isLoading, isError } = useGetWorkByIdQuery(workId);

  if (!isLoading) {
    console.log(data.authors[0].author.key);
    console.log(data);
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-around" }}
      >
        <Card
          maxW={{ base: "lg", md: "md" }}
          boxShadow="xl"
          my={{ base: 10, md: 10 }}
          mx={{ base: 0, md: 0 }}
          fontFamily="Poppins"
        >
          <CardBody>
            <Stack
              direction="row"
              spacing="10px"
              justifyContent="right"
              mt="10px"
              mb="20px"
            >
              <GrCart fontSize="1.5em" />
              <FaRegHeart fontSize="1.5em" />
            </Stack>
            <Image
              src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`}
              borderRadius="lg"
              boxSize="100%"
            />
            <Stack mt="6" spacing="3">
              <Heading size="sm">{data.title}</Heading>
              <Text noOfLines={2}>{data.description}</Text>
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
                  {data.authors[0].author.key}
                </Text>
              </GridItem>
              <GridItem w="100%" h="5">
                <Text ml="20" as="b">
                  $49.99
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
      </Box>
    );
  } else {
    return null;
  }
}
