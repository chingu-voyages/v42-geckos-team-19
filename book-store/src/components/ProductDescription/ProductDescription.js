import React from "react";

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

export default function BookPage() {
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
                  ¿Cuáles han sido las consecuencias de una pandemia que nos ha
                  distanciado a los unos de los otros? Los trabajadores de Green
                  Technology y su directora de Recursos Humanos han tenido sus
                  propias vivencias, con sus luces y sus sombras. A veces sin
                  que las sombras dejen espacio a la luz. RRetos HHumanos recoge
                  doce historias de personajes muy diferentes, basadas en
                  situaciones casi reales, que hacen que cualquiera de ellos
                  pueda ser tu compañero, tu vecino… o tú mismo.
                  <br />
                  <br />
                  A través de las experiencias de nuestros protagonistas
                  caminamos por escenarios a veces desoladores compartiendo sus
                  sentimientos más sinceros para llegar a comprender cómo el
                  camino personal y el profesional al final suelen unirse en uno
                  solo. En este libro, el tercero de esta saga temática,
                  volvemos a constatar que la esencia de las empresas la forman
                  las personas y sus sentimientos y emociones.
                  <br />
                  <br />
                  Tanto si has leído las dos entregas anteriores como si es la
                  primera vez que te adentras en el universo de Green
                  Technology, este texto único creado por once directores de
                  Recursos Humanos y su coordinador literario te hará
                  reflexionar sobre todo lo que hemos vivido en tiempos de
                  pandemia y cómo estos extraordinarios acontecimientos nos han
                  marcado para siempre. ¿Qué lecciones nos llevamos de esta
                  época, tanto las personas como las empresas?
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
          </TabPanel>
          <TabPanel>
            <p>Reviews</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}