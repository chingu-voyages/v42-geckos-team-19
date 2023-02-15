import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import { Box, Container } from "@chakra-ui/react";
import "./SearchResults.css";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useGetWorksBySearchQuery } from "../../store/books/booksSlice";

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

  if (searchRes.data && searchRes.data.docs) {
    let docs: Doc[] = searchRes.data.docs
  }

 
  return (
    <Container maxW="1400px">
      {searchRes.isLoading
        ? (
          <>Loading . . .</>
        )
        : (
          (searchRes.data && searchRes.data.docs)
            ? (
              searchRes.data.docs.map((element) => {
                return element.title;
              })
            )
            : (
              <>BAD</>
            )
        )
      }
    </Container>
  );
}
