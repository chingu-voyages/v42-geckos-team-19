import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductDescription from "../ProductDescription/ProductDescription";
import { Container } from "@chakra-ui/react";
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookWorksQuery, useGetBookBySeedQuery, useGetBookAuthorsQuery } from "../../store/books/booksSlice";


export default function BookPage() {
  let { param } = useParams();
  console.log('this is your key param! ' + param)

  const workRes = useGetBookWorksQuery(param!);

  let skip: boolean;
  skip = workRes.isLoading ? true : false;
  let authorData = workRes.isLoading ? '' : workRes.data!.authors[0].author.key.replace('/authors/', '');
  const authorRes = useGetBookAuthorsQuery(authorData, {skip});

  return (
    (workRes.isLoading || authorRes.isLoading)
      ? (
        <div>Loading . . .</div>
      )
      : (
        <Container maxW="1400px">
          <ProductDetails title={workRes.data!.title} authors={authorRes.data!.name!} />
          <ProductDescription description={workRes.data!.description} bio={authorRes.data!.bio} reviews="bad book" />
        </Container>
      )
  );
}
