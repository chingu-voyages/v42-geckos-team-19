import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import { Box, Container } from "@chakra-ui/react";
import "./SearchResults.css";
import { useParams, useNavigate } from 'react-router-dom';

export default function SearchResults() {
  // const cards = data.map((card) => {
  //   return <BookCard key={card.id} card={card} />;
  // });

  const params = useParams();
  console.log(params);

  return (
    <Container maxW="1400px">
      {/* <BookCard /> */}
      HELLO
    </Container>
  );
}
