import React from "react";
import Faq from "../Faq/Faq";
import data from "../data/data";
import Hero from "../Hero/Hero";
import BookCard from "../BookCard/BookCard";
import HomeGrid from "../HomeGrid/HomeGrid";
import { Stack, Container, Box } from "@chakra-ui/react";
import Checkout from "../../pages/Checkout/Checkout";
import "./Body.css";
import Footer from "../Footer/Footer";

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
      <Footer />
    </Container>
  );
}
