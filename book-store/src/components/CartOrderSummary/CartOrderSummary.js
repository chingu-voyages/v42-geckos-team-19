import React from "react";
import {
  Text,
  Heading,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  chakra,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function CartOrderSummary() {
  return (
    <>
      <HStack spacing={{ base: 2, sm: 10 }} my={2}>
        <Box w={{ base: "80%", md: "80%" }}>
          <Text>Subtotal</Text>
        </Box>
        <Box w={{ base: "20%", md: "20%" }}>
          <Text> $149.97</Text>
        </Box>
      </HStack>
      <HStack spacing={{ base: 2, sm: 10 }} my={2}>
        <Box w={{ base: "80%", md: "80%" }}>
          <Text>Estimated Delivery</Text>
        </Box>
        <Box w={{ base: "20%", md: "20%" }}>
          <Text> $0.00</Text>
        </Box>
      </HStack>
      <HStack spacing={{ base: 2, sm: 10 }} my={2}>
        <Box w={{ base: "80%", md: "80%" }}>
          <Heading as="h3" size="sm">
            TOTAL
          </Heading>
        </Box>
        <Box w={{ base: "20%", md: "20%" }}>
          <Heading as="h3" size="sm" className="align-right">
            $149.97
          </Heading>
        </Box>
      </HStack>
      <Divider orientation="horizontal" borderColor="#D9D9D9" my="15px" />
      <HStack
        spacing={{ base: 2, sm: 2 }}
        flexWrap="wrap"
        alignItems={{ base: "center", md: "left" }}
        justifyContent={{ base: "center", md: "left" }}
        my={8}
      >
        <Image src="../images/delivery-truck.png" h="70px"></Image>
        <Text>
          <chakra.span as="b">Arrives by</chakra.span> Thursday, January 19th
        </Text>
      </HStack>

      <Button
        h={16}
        px={16}
        color="white"
        variant="outline"
        borderColor="#E4573D"
        fontSize="lg"
        rounded="sm"
        mb={{ base: 4, sm: 4 }}
        lineHeight="20px"
        bg="#E4573D"
        _hover={{
          bg: "white",
          color: "#E4573D",
        }}
        fontFamily="Poppins"
        fontWeight="bold"
        letterSpacing="2px"
      >
        PROCEED TO PAYMENT
      </Button>

      <HStack spacing={{ base: 2.5, sm: 2.5 }}>
        <Image src="../images/payment-methods/Visa.svg" h="30px"></Image>
        <Image src="../images/payment-methods/Mastercard.svg" h="30px"></Image>
        <Image src="../images/payment-methods/Bitcoin.svg" h="30px"></Image>
        <Image src="../images/payment-methods/ApplePay.svg" h="30px"></Image>
        <Image src="../images/payment-methods/GooglePay.svg" h="30px"></Image>
        <Image src="../images/payment-methods/Stripe.svg" h="30px"></Image>
        <Image src="../images/payment-methods/Maestro.svg" h="30px"></Image>
      </HStack>
      <Flex direction="column" align="center" flex="1">
        <HStack mt="8" fontWeight="semibold">
          <p>or</p>
          <Link color="blue.500">Continue Shopping</Link>
        </HStack>
      </Flex>
    </>
  );
}
