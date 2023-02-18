import React from "react";
import { Stack } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import data from "../data/data";
import { selectCartItems } from "../../store/cart/cartSlice";
import { useSelector } from "react-redux";

export default function CheckoutCart() {
  const cartItems = useSelector(selectCartItems)
  return (
    <Stack spacing="6" mt="20px" p="30px">
      {cartItems && cartItems.map((cartItem, index) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
    </Stack>
  );
}
