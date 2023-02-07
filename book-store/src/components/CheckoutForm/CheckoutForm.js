import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  HStack,
  Select,
  Heading,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";

export default function CheckoutForm() {
  return (
    <>
      <Accordion allowToggle borderColor="#d9d9d9">
        <AccordionItem py={2}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontFamily="Poppins" as="h2" size="lg">
                1. DELIVERY
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <FormControl isRequired my="35px" borderColor="#d9d9d9">
              <HStack mb="15px">
                <Input
                  placeholder="First name"
                  size="lg"
                  borderColor="#d9d9d9"
                  color="#d9d9d9"
                  focusBorderColor="#E4573D"
                  _placeholder={{ color: "#d9d9d9" }}
                />
                <Input
                  placeholder="Last name"
                  size="lg"
                  borderColor="#d9d9d9"
                  focusBorderColor="#E4573D"
                  _placeholder={{ color: "#d9d9d9" }}
                />
              </HStack>
              <Input
                placeholder="name@email.com"
                mb="15px"
                size="lg"
                focusBorderColor="#E4573D"
                _placeholder={{ color: "#d9d9d9" }}
              />
              <Input
                placeholder="Phone number"
                size="lg"
                focusBorderColor="#E4573D"
                _placeholder={{ color: "#d9d9d9" }}
              />
            </FormControl>

            <FormControl mt="60px" borderColor="#d9d9d9">
              <Input
                placeholder="Company name (optional)"
                mb="15px"
                size="lg"
                focusBorderColor="#E4573D"
                _placeholder={{ color: "#d9d9d9" }}
              />
            </FormControl>
            <FormControl isRequired borderColor="#d9d9d9">
              <Input
                placeholder="Address"
                mb="15px"
                size="lg"
                focusBorderColor="#E4573D"
                _placeholder={{ color: "#d9d9d9" }}
              />
              <HStack>
                <Input
                  placeholder="State"
                  size="lg"
                  borderColor="#d9d9d9"
                  focusBorderColor="#E4573D"
                  _placeholder={{ color: "#d9d9d9" }}
                />
                <Select
                  placeholder="Select country"
                  size="lg"
                  borderColor="#d9d9d9"
                  focusBorderColor="#E4573D"
                >
                  <option>United Arab Emirates</option>
                  <option>Dominican Republic</option>
                </Select>
              </HStack>
              <HStack justifyContent="right" mb="50px">
                <Button
                  h={14}
                  px={8}
                  color="white"
                  variant="outline"
                  borderColor="#E4573D"
                  fontSize="lg"
                  rounded="sm"
                  mt="10"
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
                  Save & Continue
                </Button>
              </HStack>
            </FormControl>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={2}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontFamily="Poppins" as="h2" size="lg">
                2. PAYMENT INFO
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem py={2}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontFamily="Poppins" as="h2" size="lg">
                3. ORDER REVIEW
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
