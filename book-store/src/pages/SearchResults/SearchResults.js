import React from "react";
import { Box, Container } from "@chakra-ui/react";
import "./SearchResults.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const cards = data.map((card) => {
    return <BookCard key={card.id} card={card} />;
  });

  return (
    <Container maxW="1400px">
      
      
    </Container>
  );
}
