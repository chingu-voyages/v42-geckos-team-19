import React from "react";
import { props } from "./types";

import {
  Stack,
  Container,
  Center,
  Box,
  Heading,
  Text,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function ProductDescription(props: props) {
  return (
    <Container maxW="1400px" mb="200px" fontFamily="Poppins">
      <Tabs variant="enclosed" borderColor="#D9D9D9">
        <TabList>
          <Tab borderColor="#D9D9D9" mr="15px" _selected={{ color: "#E4573D" }}>
            Description
          </Tab>
          <Tab borderColor="#D9D9D9" mr="15px" _selected={{ color: "#E4573D" }}>
            About The Author
          </Tab>
          <Tab borderColor="#D9D9D9" mr="15px" _selected={{ color: "#E4573D" }}>
            Reviews
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel borderColor="#D9D9D9">
            <Stack direction={{ base: "column", md: "row" }}>
              <Box p="30px" w={{ base: "100%", md: "50%" }}>
                <Heading mb="30px" fontWeight="300" fontFamily="Poppins">
                  Sinopsis
                </Heading>
                <Text textAlign="left">
                  {(typeof props.description !== "string" && props.description) ? props.description.value : props.description ? props.description : "No description available"}
                </Text>
              </Box>
              <Box>
                <Center height="100%">
                  <Divider
                    orientation="vertical"
                    borderColor="#D9D9D9"
                    px="30px"
                  />
                </Center>
              </Box>
              <Box p="30px" w={{ base: "100%", md: "50%" }}>
                <Heading mb="30px" fontWeight="400" fontFamily="Poppins">
                  Ficha Técnica
                </Heading>
                <Text>
                  COLECCIÓN GESTIÓN DE PERSONAS Y DEL TALENTO
                  <br />
                  <br />
                  PVP: $49.99
                  <br />
                  Rústica con solapas <br />
                  14 x 22 cm
                  <br />
                  290 páginas
                  <br />
                  <br /> ISBN: 978-84-18811-24-1
                  <br />
                  Código IBIC: KJMB, KJMV2
                  <br />
                  BISAC: BUS030000 <br />
                  BUS030000 BUSINESS & ECONOMICS / Human Resources & Personnel
                  Management
                  <br />
                  <br />
                  Peso: 380 gr
                </Text>
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel>
            <p>About The Author</p>
            {(typeof props.bio !== "string") ? props.bio.value : props.bio}
          </TabPanel>
          <TabPanel>
            <p>Reviews</p>
            {props.reviews}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
