import React, { useEffect } from "react";
import "./SearchResults.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetWorksBySearchQuery } from "../../store/books/booksSlice";
import generateBookPrice from "../../utils/pricing/generateBookPrice";
import {
  Image,
  Card,
  CardBody,
  Box,
  Button,
  Divider,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Grid,
  GridItem,
  Stack,
  Alert,
  AlertTitle,
  Fade,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { query } from "firebase/firestore";
import SearchNavigationButtons from "../../components/SearchResults/SearchNavigationButtons";

export default function SearchResults() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [searchParams, setSearchParams] = useSearchParams();
  let queryTerm = "";
  let offset = 0;

  parseUrlSearchParams();

  // skip here is redux toolkit's way of allowing conditionally fetching from an api
  // see: https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
  let skip: boolean;
  skip = queryTerm ? false : true;

  const options = { queryTerm, limit: 10, offset };
  const searchRes = useGetWorksBySearchQuery(options, { skip });
  console.log("searchRes.data:", searchRes.data);

  return (
    <Container maxW="1400px">
      {searchRes.isLoading ? (
        <>Loading . . .</>
      ) : searchRes.data &&
        searchRes.data.docs &&
        searchRes.data.docs.length > 0 ? (
        <Stack>
          <Heading
            mt="20px"
            size="2xl"
            fontFamily="Libre Baskerville"
            as="i"
            fontWeight="400"
          >
            {`Results For: ${queryTerm}`}
          </Heading>
          <SimpleGrid columns={4} spacing={5} minChildWidth="280px">
            {searchRes.data.docs.map((element) => {
              return (
                <Fade in={true}>
                  <Card
                    maxW={{ base: "lg", md: "md" }}
                    boxShadow="xl"
                    my={{ base: 10, md: 10 }}
                    mx={{ base: 0, md: 0 }}
                    fontFamily="Poppins"
                  >
                    <CardBody>
                      {element.cover_i ? (
                        <Image
                          boxSize="450px"
                          borderRadius="lg"
                          src={
                            element.cover_i
                              ? `https://covers.openlibrary.org/b/id/${element.cover_i}-L.jpg`
                              : "/no-image-found"
                          }
                          alt={`Cover image for "${element.title}"`}
                        />
                      ) : (
                        <Box
                          h="450px"
                          align-items="center"
                          bg="gray.100"
                          border="solid"
                          borderRadius="lg"
                          borderColor="gray.200"
                          borderWidth="1"
                        >
                          <Text
                            fontSize="4xl"
                            mt="120px"
                            textColor="gray.300"
                            textAlign="center"
                          >
                            Cover not available
                          </Text>
                        </Box>
                      )}

                      <Stack mt="6" spacing="3">
                        <Heading noOfLines={1} size="sm">
                          {element.title}
                        </Heading>
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
                          <Text as="b" ml="3" noOfLines={1}>
                            {element.author_name}
                          </Text>
                        </GridItem>
                        <GridItem w="100%" h="5">
                          <Text ml="20" as="b">
                            ${generateBookPrice(element.title)}
                          </Text>
                        </GridItem>
                      </Grid>
                      <Stack align="center">
                        <Link
                          key={element.key}
                          to={`/book${element.key.replace("/works", "")}`}
                        >
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
                          >
                            More Details
                          </Button>
                        </Link>
                      </Stack>
                    </CardBody>
                  </Card>
                </Fade>
              );
            })}
          </SimpleGrid>
          <SearchNavigationButtons
            setSearchParams={setSearchParams}
            searchRes={searchRes}
            offset={offset}
            queryTerm={queryTerm}
          />
        </Stack>
      ) : (
        <>
          <Alert status="warning">
            <AlertTitle>
              <Heading as="h2">🕵️‍♀️ No results!</Heading>
            </AlertTitle>
          </Alert>
        </>
      )}
    </Container>
  );

  function parseUrlSearchParams() {
    for (let param of searchParams) {
      if (param[0] === "q") {
        queryTerm = param[1];
      }

      switch (param[0]) {
        case "q":
          queryTerm = param[1];
          break;

        case "offset":
          offset = parseInt(param[1], 10);
          break;
      }
    }
  }
}
