import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductDescription from "../ProductDescription/ProductDescription";
import { Container } from "@chakra-ui/react";
import { useParams, useNavigate } from 'react-router-dom';

export default function BookPage() {
  let { param } = useParams();
  console.log('this is your key param! ' + param)
  return (
    <Container maxW="1400px">
      <ProductDetails />
      <ProductDescription />
    </Container>
  );
}
