import React from "react";
import { Stack } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import data from "../data/data";

export default function CheckoutCart() {
  return (
    <Stack spacing="6">
      {data.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </Stack>
  );
}
