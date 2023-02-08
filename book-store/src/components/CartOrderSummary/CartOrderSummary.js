import React from "react";
import { Text, Heading, Flex, HStack, Link } from "@chakra-ui/react";

export default function CartOrderSummary() {
  return (
    <>
      <Text className="grid-container">
        Subtotal
        <span className="align-right">$149.97</span>
      </Text>

      <Text className="grid-container">
        Estimated Delivery
        <span className="align-right">$0.00</span>
      </Text>

      <Text className="grid-container">
        <Heading as="h3" size="sm">
          TOTAL
        </Heading>
        <Heading as="h3" size="sm" className="align-right">
          $149.97
        </Heading>
      </Text>
      <Flex direction="column" align="center" flex="1">
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color="blue.500">Continue shopping</Link>
        </HStack>
      </Flex>
    </>
  );
}
