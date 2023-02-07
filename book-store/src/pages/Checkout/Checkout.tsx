import './Checkout.css';
import { useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import type { RootState } from "../../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeCartItem, clearCartItem } from "../../store/cart/cartSlice";
import data from "../../components/data/data";
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Grid, Divider } from '@chakra-ui/react'

const AVAILABLE_ITEMS_ARR = data;














const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AVAILABLE_ITEMS_ARR.forEach(element => {
      const { title, author, id, price } = element;
      const numId = id.toString();
      const cartItem = {
        quantity: 2,
        imageUrl: '',
        id: numId,
        title,
        author,
        price
      }
      dispatch(addToCart(cartItem));
    });

  }, [])

  const cart = useSelector((state: RootState) => state.cart)
  console.log(cart);
  return (
    <Container maxW="1400px" fontFamily="Poppins">
      <CheckoutCartSummary />
    </Container>
  );
};

const CheckoutCartSummary = () => {
  return (

    <>
      <Box textAlign="center" marginBottom="30px">
        <Box display="inline-block" >
          <Heading fontFamily="Poppins" as="h1" textAlign="center" marginBottom="10px">
            CHECKOUT
            </Heading>
          <Divider width="100%" />

        </Box>
      </Box>

      <Grid templateColumns={'2fr 1fr'} columnGap="3%">
        <Card>
          <CardBody>
            <CardHeader>
              <Heading fontFamily="Poppins" as='h2' size='lg'>1. Delivery</Heading>
              <Divider />
            </CardHeader>
            <CardBody>
              <Text className="grid-container">
                Subtotal
                <span className='align-right'>$149.97</span>
              </Text>

              <Text className="grid-container">
                Estimated Delivery
                <span className='align-right'>$0.00</span>
              </Text>

              <Text className="grid-container">
                <Heading as='h3' size='sm'>TOTAL</Heading>
                <Heading as='h3' size='sm' className='align-right'>$149.97</Heading>
              </Text>
            </CardBody>

          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>
              <Heading fontFamily="Poppins" as='h2' size='lg'>IN YOUR BAG</Heading>
            </CardHeader>
            <CardBody>
              <Text className="grid-container">
                Subtotal
                <span className='align-right'>$149.97</span>
              </Text>

              <Text className="grid-container">
                Estimated Delivery
                <span className='align-right'>$0.00</span>
              </Text>

              <Text className="grid-container">
                <Heading as='h3' size='sm'>TOTAL</Heading>
                <Heading as='h3' size='sm' className='align-right'>$149.97</Heading>
              </Text>
            </CardBody>

          </CardBody>
        </Card>
      </Grid>
    </>
  )
}

export default Checkout;


