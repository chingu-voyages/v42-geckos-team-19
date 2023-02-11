import React from "react";
<<<<<<< HEAD:book-store/src/components/Body/Body.js
import Faq from "../Faq/Faq";
import data from "../data/data";
import Hero from "../Hero/Hero";
import BookCard from "../BookCard/BookCard";
import HomeGrid from "../HomeGrid/HomeGrid";
import { Stack, Container, Box } from "@chakra-ui/react";
import Checkout from "../../pages/Checkout/Checkout";
import "./Body.css";
import Footer from "../Footer/Footer";
=======
import Faq from "../../components/Faq/Faq";
import data from "../../components/data/data";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";
import HomeGrid from "../../components/HomeGrid/HomeGrid";
import Checkout from "../Checkout/Checkout";
import { Box, Container } from "@chakra-ui/react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
>>>>>>> development:book-store/src/pages/Home/Home.js

export default function Home() {
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
