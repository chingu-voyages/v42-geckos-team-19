import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  HStack,
  Select,
} from "@chakra-ui/react";

export default function CheckoutForm() {
  return (
    <>
      <FormControl isRequired mb="15px">
        <HStack mb="15px">
          <Input placeholder="First name" size="lg" />
          <Input placeholder="Last name" size="lg" />
        </HStack>
        <Input placeholder="name@email.com" mb="15px" size="lg" />
        <Input placeholder="Phone number" size="lg" />
      </FormControl>

      <FormControl mt="60px">
        <Input placeholder="Company name (optional)" mb="15px" size="lg" />
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
    </>
  );
}
