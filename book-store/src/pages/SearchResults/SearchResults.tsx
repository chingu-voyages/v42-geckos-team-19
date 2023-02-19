import React, { useEffect } from "react";
import "./SearchResults.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetWorksBySearchQuery } from "../../store/books/booksSlice";
import {
  Image,
  Card,
  CardBody,
  Box,
  Divider,
  Heading,
  Text,
  Container,
  SimpleGrid,
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
          <SimpleGrid columns={4} spacing={5} minChildWidth="280px">
            {searchRes.data.docs.map((element) => {
              return (
                <Link
                  key={element.key}
                  to={`/book${element.key.replace("/works", "")}`}
                >
                  <Fade in={true}>
                    <Card
                      maxW={{ base: "lg", md: "md" }}
                      boxShadow="xl"
                      my={{ base: 10, md: 10 }}
                      mx={{ base: 0, md: 0 }}
                      fontFamily="Poppins"
                    >
                      <CardBody>
                        <Image
                          boxSize="100%"
                          borderRadius="lg"
                          src={
                            element.cover_i
                              ? `https://covers.openlibrary.org/b/id/${element.cover_i}-L.jpg`
                              : "/no-image-found"
                          }
                          alt={
                            element.cover_i
                              ? `Cover image for "${element.title}"`
                              : "No cover image available"
                          }
                        />

                        <Stack mt="6" spacing="3">
                          <Heading size="sm">{element.title}</Heading>
                          <Text noOfLines={1}>{element.author_name}</Text>
                        </Stack>
                        <Divider my="6" borderColor="#D9D9D9" />
                      </CardBody>
                    </Card>
                  </Fade>
                </Link>
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
