import React from "react";
import ProductDetails from "../../components/BookPage/ProductDetails/ProductDetails";
import ProductDescription from "../../components/BookPage/ProductDescription/ProductDescription";
import { Container } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetWorkByIdQuery,
  useGetRatingsByWorkIdQuery,
  useGetAuthorByIdQuery,
} from "../../store/books/booksSlice";
import { CartItem } from "../../store/cart/types";

export default function BookPage() {
  let { param } = useParams();
  console.log("this is your key param! " + param);

  const workRes = useGetWorkByIdQuery(param!);
  const ratingsRes = useGetRatingsByWorkIdQuery(param!);

  // skip here is redux toolkit's way of allowing conditionally fetching from an api
  // see: https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
  let skip: boolean;
  skip = (workRes.isLoading) ? true : false;

  let authorData = '';
  if (!skip && workRes.data!.authors) {
    authorData = workRes.isLoading ? '' : workRes.data!.authors[0].author.key.replace('/authors/', '');
  }
  const authorRes = useGetAuthorByIdQuery(authorData, { skip });
  
  let cartItemObj: CartItem;
  if (workRes.isLoading || ratingsRes.isLoading || authorRes.isLoading) {
    // wait to set up cart until everything is loaded
  } else {
    cartItemObj = {
      title: workRes.data!.title,
      author: workRes.data!.authors ? authorRes.data!.name! : "Anonymous",
      imageUrl: workRes.data!.covers ? workRes.data!.covers[0] : null,
      id: param!,
      quantity: 1,
      price: 0
    }
    
  }
  


  return (
    (workRes.isLoading || ratingsRes.isLoading || authorRes.isLoading)
      ? (
        <div>Loading . . .</div>
      )
      : (
        <Container maxW="1400px">
          <ProductDetails
            title={workRes.data!.title}
            ratingsSummary={{ average: ratingsRes.data!.summary.average, count: ratingsRes.data!.summary.count }}
            authors={workRes.data!.authors ? authorRes.data!.name! : "Anonymous"}
            coverId={workRes.data!.covers ? workRes.data!.covers[0] : null}
            cartItemObj={cartItemObj!}
          />
          <ProductDescription description={workRes.data!.description} bio={authorRes.data!.bio ? authorRes.data!.bio : ''} reviews="bad book" />
        </Container>
      )
  );
}
