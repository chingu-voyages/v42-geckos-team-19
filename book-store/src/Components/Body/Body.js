import React from "react";
import BookCard from "../BookCard/BookCard.js";
import { Box, Center, Image } from "@chakra-ui/react";
import data from "../data/data.js";
import "./Body.css";

export default function Body() {
  const cards = data.map((card) => {
    return <BookCard key={card.id} card={card} />;
  });

  return (
    <div className="body">
      <Box bg="#7d94d1" w="100%" p={3} color="white">
        <Center as="b">
          LIMITED TIME OFFER - 50% OFF ALL BOOKS WITH SOFT COVERS
        </Center>
      </Box>
      <Box boxSize="100%">
        <Image src="../images/main-image.png" alt="books" />
      </Box>
      <section className="cards-list">{cards}</section>
    </div>
  );
}
