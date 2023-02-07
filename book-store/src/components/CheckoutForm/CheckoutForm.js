import React from "react";
import { Stack } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import data from "../data/data";

export default function CheckoutForm() {
  const cards = data.map((card) => {
    return <CartItem key={card.id} card={card} />;
  });

  return (
    <Stack display="flex" alignItems="center" justifyContent="space-between">
      {cards}
    </Stack>
  );
}
