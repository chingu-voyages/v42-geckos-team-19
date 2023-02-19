import React from "react";
import Faq from "../Faq/Faq";
import data from "../data/data";
import Hero from "../Hero/Hero";
import BookCard from "../BookCard/BookCard";
import HomeGrid from "../HomeGrid/HomeGrid";
import { Box, Container } from "@chakra-ui/react";
import "./Body.css";
import Footer from "../Footer/Footer";
import Categories from "../Categories/Categories";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { booksApi } from "../../store/books/booksSlice";

export default function Body() {
  return (
    <Container maxW="1400px">
      <Categories />
    </Container>
  );
}
