import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import { Box, Container, Heading, Stack, HStack, VStack, Alert, AlertTitle, AlertDescription, Button, ButtonGroup } from "@chakra-ui/react";
import "./SearchResults.css";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useGetWorksBySearchQuery } from "../../store/books/booksSlice";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Image,
  Card,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { query } from "firebase/firestore";
import SearchNavigationButtons from "../../components/SearchResults/SearchNavigationButtons";



export default function SearchResults() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })


  const [searchParams, setSearchParams] = useSearchParams();
  let queryTerm = "";
  let offset = 0;


  parseUrlSearchParams();

  // skip here is redux toolkit's way of allowing conditionally fetching from an api
  // see: https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
  let skip: boolean;
  skip = (queryTerm) ? false : true;

  const options = { queryTerm, limit: 10, offset }
  const searchRes = useGetWorksBySearchQuery(options, { skip });
  console.log('searchRes.data:', searchRes.data);

  return (
    <Container maxW="1400px">
      {searchRes.isLoading
        ? (
          <>Loading . . .</>
        )
        : (
          (searchRes.data && searchRes.data.docs && searchRes.data.docs.length > 0)
            ? (
              <Stack>

                {searchRes.data.docs.map((element) => {
                  return (
                    <Link to={`/book${element.key.replace('/works', '')}`}>

                      <Card direction="row">
                        <Image
                          fit="contain"
                          overflow="auto"
                          boxSize='100px'
                          paddingRight="5px"
                          fontSize="12px"
                          src={
                            element.cover_i
                              ? `https://covers.openlibrary.org/b/id/${element.cover_i}-S.jpg`
                              : '/no-image-found'
                          }
                          alt={
                            element.cover_i
                              ? `Cover image for "${element.title}"`
                              : "No cover image available"
                          }
                        />
                        {element.title} by {element.author_name}
                      </Card>

                    </Link>
                  );
                })}
                <SearchNavigationButtons 
                setSearchParams={setSearchParams} 
                searchRes={searchRes} 
                offset={offset} 
                queryTerm={queryTerm} />
              </Stack>
            )
            : (
              <>
                <Alert status='warning'>
                  <AlertTitle><Heading as="h2">🕵️‍♀️ No results!</Heading></AlertTitle>
                </Alert>
              </>
            )
        )
      }
    </Container>
  );

  function parseUrlSearchParams() {
    for (let param of searchParams) {
      if (param[0] === 'q') {
        queryTerm = param[1];
      }

      switch (param[0]) {

        case 'q':
          queryTerm = param[1];
          break;

        case 'offset':
          offset = parseInt(param[1], 10);
          break;

      }
    }

  }

  


}
