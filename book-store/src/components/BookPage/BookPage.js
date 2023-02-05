import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductDescription from "../ProductDescription/ProductDescription";
import { Container } from "@chakra-ui/react";

export default function BookPage() {
  return (
    <Container maxW="1400px">
      <ProductDetails />
      <ProductDescription />
    </Container>
  );
}
