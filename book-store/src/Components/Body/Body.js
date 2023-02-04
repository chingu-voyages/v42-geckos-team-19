import React from "react";
import Faq from "../Faq/Faq";
import data from "../data/data";
import Hero from "../Hero/Hero";
import BookCard from "../BookCard/BookCard";
import HomeGrid from "../Homegrid/Homegrid";
import { Stack, Container } from "@chakra-ui/react";

export default function Body() {
  const cards = data.map((card) => {
    return <BookCard key={card.id} card={card} />;
  });

  return (
    <Container maxW="1400px">
      <Hero />
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: "50px" }}
      >
        {cards}
      </Stack>
      <HomeGrid />
      <Faq />
    </Container>
  );
}
