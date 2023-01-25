import React from "react";
import BookCard from "../BookCard/BookCard";
import data from "../data/data";
import Hero from "../Hero/Hero";
import {
  Box,
  Center,
  Image,
  Container,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
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
      <Box mt="20">
        <Image src="../images/book-stack.png" alt="books" />
      </Box>
    </Container>
  );
}
