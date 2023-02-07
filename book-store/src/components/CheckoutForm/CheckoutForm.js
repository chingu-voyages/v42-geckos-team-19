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
            <FormControl isRequired my="35px">
              <HStack mb="15px">
                <Input placeholder="First name" size="lg" />
                <Input placeholder="Last name" size="lg" />
              </HStack>
              <Input placeholder="name@email.com" mb="15px" size="lg" />
              <Input placeholder="Phone number" size="lg" />
            </FormControl>

            <FormControl mt="60px">
              <Input
                placeholder="Company name (optional)"
                mb="15px"
                size="lg"
              />
            </FormControl>
            <FormControl isRequired>
              <Input placeholder="Address" mb="15px" size="lg" />
              <HStack>
                <Input placeholder="State" size="lg" />
                <Select placeholder="Select country" size="lg">
                  <option>United Arab Emirates</option>
                  <option>Dominican Republic</option>
                </Select>
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
