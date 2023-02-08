import "./Checkout.css";
import { useEffect } from "react";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CartOrderSummary from "../../components/CartOrderSummary/CartOrderSummary";
import type { RootState } from "../../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeCartItem,
  clearCartItem,
} from "../../store/cart/cartSlice";
import data from "../../components/data/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Grid,
  Divider,
  Box,
  Container,
} from "@chakra-ui/react";

const AVAILABLE_ITEMS_ARR = data;

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AVAILABLE_ITEMS_ARR.forEach((element) => {
      const { title, author, id, price } = element;
      const numId = id.toString();
      const cartItem = {
        quantity: 2,
        imageUrl: "",
        id: numId,
        title,
        author,
        price,
      };
      dispatch(addToCart(cartItem));
    });
  }, []);

  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);
  return (
    <Container maxW="1400px" fontFamily="Poppins" mb="200px">
      <CheckoutCartSummary />
    </Container>
  );
};

const CheckoutCartSummary = () => {
  return (
    <>
      <Box textAlign="center" mb="30px">
        <Box display="inline-block">
          <Heading
            fontFamily="Poppins"
            as="h1"
            textAlign="center"
            marginBottom="10px"
          >
            CHECKOUT
          </Heading>
          <Divider orientation="horizontal" borderColor="#D9D9D9" my="15px" />
        </Box>
      </Box>

      <Grid templateColumns={"2fr 1fr"} columnGap="3%">
        <Card>
          <CardBody>
            <Heading fontFamily="Poppins" as="h2" size="lg">
              IN YOUR BAG
            </Heading>
            <Divider orientation="horizontal" borderColor="#D9D9D9" my="15px" />
            <CheckoutCart />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading fontFamily="Poppins" as="h2" size="lg">
              ORDER SUMMARY
            </Heading>
            <Divider orientation="horizontal" borderColor="#D9D9D9" my="15px" />

            <CardBody>
              <CartOrderSummary />
            </CardBody>
          </CardBody>
        </Card>
      </Grid>
    </>
  );
};

export default Checkout;
