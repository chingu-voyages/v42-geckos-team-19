import React from "react";
import Counter from "../../Counter/Counter";
import { props, ratingsSummary, coverId } from "./types";
import {
  Stack,
  HStack,
  Container,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  Image,
  Button,
  chakra,
  Icon,
  StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeCartItem,
  clearCartItem,
} from "../../../store/cart/cartSlice";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { RiStarFill } from "react-icons/ri";

export default function ProductDetails(props: props) {
  const dispatch = useDispatch();
  return (
    <Container maxW="1400px" mb="100px" fontFamily="Poppins">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "0", sm: "24px" }}
      >
        <Box w={{ base: "100%", md: "50%" }} mb={{ base: "25px", md: "0" }}>
          <Card
            maxW="sm"
            boxShadow="xl"
            my={{ base: 5, md: 50 }}
            fontFamily="Poppins"
          >
            <CardBody>
              <BookCoverImg coverId={props.coverId} title={props.title} />
            </CardBody>
          </Card>
        </Box>
        <Box
          bg="white"
          w={{ base: "100%", md: "50%" }}
          mb={{ base: "25px", md: "0" }}
        >
          <Stack mt={{ base: "0", md: "20" }}>
            <Heading fontSize="40px" fontWeight="600" fontFamily="Poppins">
              {props.title}
            </Heading>
            <Text fontSize="20px" lineHeight={1.5} fontWeight="300">
              {props.authors}
            </Text>

            <HStack
              spacing={{ base: 0, sm: 2 }}
              flexWrap="wrap"
              alignItems={{ base: "center", md: "left" }}
              justifyContent="left"
              py="15px"
            >
              <Text pl="5px">
                <Rating
                  average={props.ratingsSummary.average}
                  count={props.ratingsSummary.count}
                />
              </Text>
            </HStack>
          </Stack>
          <Divider
            orientation="horizontal"
            borderColor="#D9D9D9"
            mt="10px"
            mb="40px"
          />

          <Text my={6} fontSize="25px">
            ${props.price}
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            flexWrap="wrap"
            alignItems={{ base: "center", md: "left" }}
            justifyContent={{ base: "center", md: "left" }}
            mb={5}
          >
            <Counter
              potentialCartItemCountAugment={
                props.potentialCartItemCountAugment
              }
              setPotentialCartItemCountAugment={
                props.setPotentialCartItemCountAugment
              }
            />
            <Button
              h={12}
              px={8}
              color="white"
              variant="outline"
              borderColor="#E4573D"
              fontSize="lg"
              rounded="sm"
              mb={{ base: 2, sm: 0 }}
              lineHeight="20px"
              bg="#E4573D"
              _hover={{
                bg: "white",
                color: "#E4573D",
              }}
              fontFamily="Poppins"
              fontWeight="400"
              letterSpacing="2px"
              onClick={(e) => dispatch(addToCart(props.cartItemObj))}
            >
              Add to Cart
            </Button>
          </HStack>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            flexWrap="wrap"
            alignItems={{ base: "center", md: "left" }}
            justifyContent={{ base: "center", md: "left" }}
            mb={10}
          >
            <Image src="../images/delivery-truck.png" h="70px"></Image>
            <Text>
              <chakra.span as="b">Approximate delivery</chakra.span> on
              Thursday, January 19th
            </Text>
          </HStack>
          <Stack>
            <Box
              borderRadius="md"
              borderWidth="1px"
              borderColor="#D9D9D9"
              p="10px"
              mt="20px"
            >
              <HStack
                spacing="20"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
              >
                <HStack>
                  <Text>Share with friends</Text> <FiShare2 />
                </HStack>
                <HStack>
                  <Text>Save to wishlist</Text> <FaRegHeart />
                </HStack>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

function Rating(props: ratingsSummary) {
  const max = 5;

  const color = useColorModeValue("#d9d9d9", "#d9d9d9");
  const activeColor = useColorModeValue("#F7B744", "orange.500");
  if (typeof props.average === "number") {
  }

  return typeof props.average === "number" ? (
    <>
      <HStack spacing="0.5">
        {Array.from({ length: max })
          .map((_, index) => index + 1)
          .map((index) => (
            <Icon
              key={index}
              as={RiStarFill}
              boxSize={6}
              color={index <= Math.round(props.average!) ? activeColor : color}
            />
          ))}
        <chakra.span pl="10px">
          {props.average.toFixed(1)} ({props.count})
        </chakra.span>
      </HStack>
    </>
  ) : (
    <>Ratings not available</>
  );
}

interface BookCoverImgProps {
  coverId: coverId | null;
  title: string;
}
function BookCoverImg(props: BookCoverImgProps) {
  return props.coverId ? (
    <Image
      src={`https://covers.openlibrary.org/b/id/${props.coverId}-L.jpg?default=false`}
      alt={props.title + " cover image"}
      borderRadius="lg"
      boxSize="100%"
    />
  ) : (
    <Box
      h="500px"
      align-items="center"
      bg="gray.100"
      border="solid"
      borderRadius="lg"
      borderColor="gray.200"
      borderWidth="1"
    >
      <Text fontSize="4xl" mt="120px" textColor="gray.300" textAlign="center">
        Cover not available
      </Text>
    </Box>
  );
}
