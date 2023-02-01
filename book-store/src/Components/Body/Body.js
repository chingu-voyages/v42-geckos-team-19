import React from "react";
import Faq from "../Faq/Faq";
import data from "../data/data";
import Hero from "../Hero/Hero";
import BookCard from "../BookCard/BookCard";
import BookPage from "../BookPage/BookPage";
import HomeGrid from "../HomeGrid/HomeGrid";
import { Box, Container } from "@chakra-ui/react";
import "./Body.css";

export default function Body() {
  const cards = data.map((card) => {
    return <BookCard key={card.id} card={card} />;
  });

  return (
    <Container maxW="1400px">
      <Hero />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {cards}
      </Box>
      <HomeGrid />
      <Faq />

      <BookPage />
    </Container>
  );
}
