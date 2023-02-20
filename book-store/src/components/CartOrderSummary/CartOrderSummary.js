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
  Stat,
  StatNumber,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


export default function CartOrderSummary(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = props

  let total = 0;
  for (const cartItem of cartItems) {
    total += cartItem.price * cartItem.quantity;
  }
  total = total.toFixed(2);

  const today = new Date();
  let deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 3);

  const deliveryFee = 4;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl">Thanks for playing!</ModalHeader>
          
          <ModalCloseButton />
          <ModalBody border="#E4573D solid 2px" margin="0 15px">
          <Text textAlign="center" margin="5" fontSize="lg">This project built
           by: 
           <Text fontWeight="bold"><Link color="blue.500" href="https://github.com/chingu-voyages/v42-geckos-team-19">Voyage 42's Geckos Team 19</Link></Text> of <Text fontWeight="bold"><Link color="blue.500" href="https://www.chingu.io/">Chingu!</Link></Text>
          </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <HStack spacing={{ base: 2, sm: 10 }} my={2}>
        <Box w={{ base: "80%", md: "80%" }}>
          <Text>Subtotal</Text>
        </Box>
        <Box w={{ base: "20%", md: "20%" }}>
          <Text overflowWrap="normal"> ${total}</Text>
        </Box>
      </HStack>
      <HStack spacing={{ base: 2, sm: 10 }} my={2}>
        <Box w={{ base: "80%", md: "80%" }}>
          <Text>Estimated Delivery</Text>
        </Box>
        <Box w={{ base: "20%", md: "20%" }}>
          <Text overflowWrap="normal"> {(total !== "0.00") ? (`$` + deliveryFee.toFixed(2)) : ("$0.00")}</Text>
        </Box>
      </HStack>
      <HStack spacing={{ base: 2, sm: 10 }} my={2}>
        <Box w={{ base: "80%", md: "80%" }}>
          <Heading as="h3" size="sm">
            TOTAL
          </Heading>
        </Box>
        <Box w={{ base: "20%", md: "20%" }}>

          <Stat >
            <StatNumber overflowWrap="normal">${total}</StatNumber>
          </Stat>
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
          <chakra.span as="b">Arrives by</chakra.span> {deliveryDate.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" })}
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
        onClick={onOpen}
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
          <Link color="blue.500">
            <RouterLink to="/categories/general">Continue Shopping</RouterLink>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
