import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import { Box, Container } from "@chakra-ui/react";
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
import { Stack, HStack, VStack } from '@chakra-ui/react'



export default function SearchResults() {
  // const cards = data.map((card) => {
  //   return <BookCard key={card.id} card={card} />;
  // });

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  let queryTerm = "";
  for (let param of searchParams) {
    if (param[0] === 'q') {
      queryTerm = param[1];
      break;
    }
  }

  // skip here is redux toolkit's way of allowing conditionally fetching from an api
  // see: https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
  let skip: boolean;
  skip = (queryTerm) ? false : true;

  const options = { queryTerm, limit: 10, offset: 0 }
  const searchRes = useGetWorksBySearchQuery(options, { skip });
  console.log({ skip, isLoading: searchRes.isLoading });
  console.log(searchRes.data);

  return (
    <Container maxW="1400px">
      {searchRes.isLoading
        ? (
          <>Loading . . .</>
        )
        : (
          (searchRes.data && searchRes.data.docs)
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
            </Stack>
            )
            : (
              <>BAD</>
            )
        )
      }
    </Container>
  );
}
