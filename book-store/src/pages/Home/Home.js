import React from "react";
import Faq from "../../components/Faq/Faq";
import data from "../../components/data/data";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";
import HomeGrid from "../../components/HomeGrid/HomeGrid";
import Checkout from "../Checkout/Checkout";
import { Box, Container } from "@chakra-ui/react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
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
      <Footer />
    </Container>
  );
}
