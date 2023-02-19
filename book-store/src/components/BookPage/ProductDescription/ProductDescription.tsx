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
          <Tab
            borderColor="#D9D9D9"
            borderBottom="none"
            mr="15px"
            _selected={{ color: "#E4573D" }}
          >
            Description
          </Tab>
          <Tab
            borderColor="#D9D9D9"
            borderBottom="none"
            mr="15px"
            _selected={{ color: "#E4573D" }}
          >
            About The Author
          </Tab>
          <Tab
            borderColor="#D9D9D9"
            borderBottom="none"
            mr="15px"
            _selected={{ color: "#E4573D" }}
          >
            Reviews
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel borderColor="#D9D9D9">
            <Stack direction={{ base: "column", md: "row" }}>
              <Box p="30px" w={{ base: "100%", md: "50%" }}>
                <Heading mb="30px" fontWeight="300" fontFamily="Poppins">
                  Synopsis
                </Heading>
                <Text textAlign="left">
                  {typeof props.description !== "string" && props.description
                    ? props.description.value
                    : props.description
                      ? props.description
                      : "No description available"}
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
            <Heading mb="30px" fontWeight="300" fontFamily="Poppins">
              About the Author
            </Heading>
            {typeof props.bio !== "string" ? props.bio.value : props.bio}
          </TabPanel>
          <TabPanel>
            <Heading mb="30px" fontWeight="300" fontFamily="Poppins">
              Reviews
            </Heading>
            <Text marginBottom="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui ex, interdum id sapien non, sagittis auctor est. Maecenas molestie eget ex ut egestas. Fusce elementum nisl at nulla pulvinar, consequat commodo massa porttitor. Etiam viverra eleifend ligula et aliquet. Integer mollis ex vitae porttitor tempus. Donec sodales, odio commodo venenatis suscipit, metus augue efficitur quam, sit amet dictum purus elit ac lectus. Nullam lobortis eleifend vulputate. Nunc eget erat vitae sem luctus pharetra. Maecenas arcu leo, blandit ac ante fringilla, condimentum rhoncus ligula. Etiam consectetur augue non diam ultricies, sed elementum diam sagittis. Mauris convallis, tortor a commodo ornare, ligula urna ultricies erat, in lacinia ante ante nec velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Text>
            <Text marginBottom="15px">
              Sed nec mattis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas interdum bibendum efficitur. Vestibulum iaculis viverra massa id cursus. Sed iaculis tortor mattis purus pharetra, at porta lorem aliquam. Aenean congue arcu vitae eros ornare laoreet. Proin dui velit, dapibus ut iaculis commodo, sodales in sapien. Sed aliquet facilisis nisl sed consectetur. Vestibulum molestie, eros vel venenatis aliquam, nulla dui facilisis erat, a ornare eros nisl sit amet nisl. In hac habitasse platea dictumst. In luctus laoreet sapien eget mollis. Suspendisse erat leo, sollicitudin eu congue a, ultrices in mauris. Maecenas tincidunt odio vitae convallis consequat. Integer suscipit lectus nec elit pellentesque egestas. Donec porttitor nisl ut augue scelerisque suscipit.
            </Text>
            <Text marginBottom="15px">
              Nunc rhoncus hendrerit sem, non commodo odio sollicitudin scelerisque. Fusce ac lorem efficitur, feugiat nulla in, auctor diam. Maecenas ultrices at magna finibus feugiat. Integer vulputate mauris et feugiat ultricies. Donec ultricies tempor erat nec posuere. Vestibulum in tempor nibh. Vivamus sit amet venenatis risus, id consequat velit. Nulla ac pulvinar augue, quis tempor metus. Nunc rutrum ex sed libero suscipit, id aliquam erat ultricies. Donec sodales auctor gravida.
            </Text>
            <Text marginBottom="15px">
              Fusce mattis mauris sed elementum maximus. Integer non commodo lorem. Quisque viverra bibendum erat, eleifend pellentesque elit tempus eget. Sed nec ante sem. Maecenas iaculis lacinia est, sed malesuada nisl suscipit et. Proin sodales tempor nulla, eu efficitur tortor vestibulum eget. Aliquam id bibendum risus. Praesent consectetur lectus sed leo eleifend maximus. Aenean pellentesque ipsum sed porta gravida. Ut faucibus in quam vel faucibus.
            </Text>
            <Text marginBottom="15px">
              Fusce in nibh id lectus condimentum auctor at sed eros. Mauris eget consequat urna. Ut tristique scelerisque eros, vel volutpat ipsum cursus ac. Pellentesque et auctor mauris, sit amet dignissim quam. Integer maximus neque in nulla tempus, non rhoncus nisl condimentum. Phasellus eget faucibus est, quis auctor velit. Fusce vehicula nec nulla ut ullamcorper. Vivamus at turpis orci. Curabitur rutrum malesuada mi eget vehicula. Praesent lobortis leo ultrices ipsum mattis lacinia.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
