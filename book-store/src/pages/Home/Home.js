import React from "react";
import Faq from "../../components/Faq/Faq";
//import data from "../../components/data/data";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";
import HomeGrid from "../../components/HomeGrid/HomeGrid";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Container, Stack } from "@chakra-ui/react";
import "./Home.css";
import { useSearchParams } from "react-router-dom";

const BOOKS_DATA = ["OL17860744W", "OL17823218W", "OL17352669W"];


export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <Container maxW="1400px">
      <Hero />
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: "50px" }}
      >
        {BOOKS_DATA.map((bookId, index) => (
          <BookCard key={index} workId={bookId} />
        ))}
      </Stack>
      <HomeGrid />
      <Faq />
      <Footer />
    </Container>
  );
}
