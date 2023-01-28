import React from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";

export default function HomeGrid() {
  return (
    <Grid
      h="150px"
      templateRows="repeat(2, 2fr)"
      templateColumns="repeat(4, 3fr)"
      gap={5}
      mt="20"
    >
      <GridItem colSpan={2} bg="white">
        <Image
          src="../images/grid-banners/grid-banner1.png"
          alt="books"
          h="100%"
          w="100%"
        />
      </GridItem>
      <GridItem colSpan={1} bg="white">
        <Image
          src="../images/grid-banners/grid-banner2.png"
          alt="books"
          h="100%"
          w="100%"
        />
      </GridItem>
      <GridItem colSpan={1} bg="white">
        <Image
          src="../images/grid-banners/grid-banner3.png"
          alt="books"
          h="100%"
          w="100%"
        />
      </GridItem>
      <GridItem colSpan={1} bg="white">
        <Image
          src="../images/grid-banners/grid-banner4.png"
          alt="books"
          h="100%"
          w="100%"
        />
      </GridItem>
      <GridItem colSpan={2} bg="white">
        <Image
          src="../images/grid-banners/grid-banner5.png"
          alt="books"
          h="100%"
          w="100%"
        />
      </GridItem>
      <GridItem colSpan={1} bg="white">
        <Image
          src="../images/grid-banners/grid-banner6.png"
          alt="books"
          h="100%"
          w="100%"
        />
      </GridItem>
    </Grid>
  );
}
