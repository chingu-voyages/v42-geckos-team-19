import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverTrigger,
  TableContainer,
  Text,
  Grid,
} from "@chakra-ui/react";
import { useGetWorksBySubjectQuery } from "../../store/books/booksSlice";
import CategoriesBook from "../Categories/CategoriesBook";
import "./Categories.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoriesFilterFunc from "./CategoriesFilterFunc";

// TODO: Possibly only rerender when all CategoriesBook comps are fully loaded
// I.e. when map function is complete?

/* Check for nonfiction params because some fiction params look similar to nonfiction params */
const NONFICTION_PARAMS = [
  "finance",
  "biography",
  "travel",
  "business",
  "religion",
  "cookbooks",
  "self-help",
  "psychology",
  "music",
  "education",
  "anthropology",
  "environment",
  "sports",
  "science",
  "politics_and_government",
];

export default function Categories() {
  let { param } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offset]);

  const { data, isLoading, isError } = useGetWorksBySubjectQuery({
    subject: param,
    limit,
    offset,
  });

  return (
    <Container maxW="1400px">
      {isLoading ? (
        <>Loading . . .</>
      ) : (
        <>
          <HStack spacing="5" mt="20" ml="5" fontFamily="poppins">
            <Heading
              size="2xl"
              fontFamily="Libre Baskerville"
              as="i"
              fontWeight="400"
            >
              Sort books by
            </Heading>
            <Popover>
              <PopoverTrigger>
                <Button
                  mx="5"
                  p="6"
                  size="lg"
                  bg="white"
                  color="#E4573D"
                  variant="outline"
                  borderColor="#E4573D"
                  rounded="sm"
                  _hover={{ bg: "#E4573D", color: "white" }}
                >
                  <Box fontSize="1.5em" mb="1">
                    {/* Cannot use a function here; text will not display */}
                    {param == "general"
                      ? "< select a category >"
                      : (NONFICTION_PARAMS.includes(param)
                          ? "Nonfiction > "
                          : "Fiction > ") +
                        param
                          .replace(/_/gi, " ")
                          .replace(/and/gi, "&")
                          .replace(/fiction|general/gi, "")}
                  </Box>
                </Button>
              </PopoverTrigger>
              <PopoverContent ml="10em" w="80vw" borderColor="#d9d9d9">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                  as="b"
                  fontSize="lg"
                  textAlign="center"
                  borderColor="#d9d9d9"
                >
                  Select a category
                </PopoverHeader>
                <PopoverHeader as="b" bg="#d9d9d9" borderColor="#d9d9d9">
                  <Text ml="2">Fiction</Text>
                </PopoverHeader>
                <PopoverBody>
                  <TableContainer>
                    <Box overflowY="auto" maxHeight="10vh">
                      {/* Display fiction categories in a 3x5 grid */}
                      <Grid templateColumns="repeat(5, 1fr)" gap={3} h="60px">
                        <CategoriesFilterFunc fiction={1} />
                      </Grid>
                    </Box>
                  </TableContainer>
                </PopoverBody>
                <PopoverHeader as="b" bg="#d9d9d9" borderColor="#d9d9d9">
                  <Text ml="2">Nonfiction</Text>
                </PopoverHeader>
                <PopoverBody>
                  <TableContainer>
                    <Box overflowY="auto" maxHeight="10vh">
                      {/* Display nonfiction categories in a 3x5 grid */}
                      <Grid templateColumns="repeat(5, 1fr)" gap={3} h="60px">
                        <CategoriesFilterFunc fiction={0} />
                      </Grid>
                    </Box>
                  </TableContainer>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          {/* map function can only be used on an array */}
          <SimpleGrid columns={4} spacing={5} minChildWidth="280px">
            {data &&
              data.works.map((card) => {
                return <CategoriesBook bookKey={card.key} card={card} />;
              })}
          </SimpleGrid>
          {/* Displays the next 20 books */}
          {offset + limit < data.work_count ? (
            <Box textAlign="center">
              <Button
                mb="24px"
                bgColor="#E4573D"
                color="white"
                colorScheme="E4573D"
                size="md"
                fontSize="lg"
                rounded="sm"
                px="12"
                py="6"
                mt="2"
                variant="outline"
                _hover={{ bg: "white", color: "#E4573D" }}
                letterSpacing="2px"
                onClick={() => {
                  setOffset((oldOffset) => (oldOffset += 20));
                }}
              >
                See More
              </Button>
            </Box>
          ) : null}
        </>
      )}
    </Container>
  );
}
