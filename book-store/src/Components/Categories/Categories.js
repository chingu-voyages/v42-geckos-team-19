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
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text
} from '@chakra-ui/react';
import { booksSlice } from '../../store/books/booksSlice';
import { useGetBooksBySubjectQuery } from '../../store/books/booksSlice';
import CategoriesBook from '../Categories/CategoriesBook';
import './Categories.css';

export default function Categories() {
    /* Don't have to use isLoading, isError--just for future ref */

    const { data, isLoading, isError } = useGetBooksBySubjectQuery('general');

    /* FIX: how to pass id to query above? */
    var elements = document.querySelectorAll('a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(
            'click',
            function () {
                console.log(this.id);
            },
            true
        );
    }

    return (
        <Container maxW="1400px">
            <HStack spacing="5" mt="20" ml="5">
                <Heading size="2xl">Sort books by</Heading>
                <Popover>
                    <PopoverTrigger>
                        <Button mx="5" size="lg" width="12vw">
                            <Box fontSize="1.5em" mb="1">
                                {/* TODO: change button text to match selected genre */}
                                category
                            </Box>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent ml="10em" w="80vw">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader textAlign="center">
                            Select a category
                        </PopoverHeader>
                        <PopoverHeader ml="3" bg="gray.50" as="b">
                            Fiction
                        </PopoverHeader>
                        <PopoverBody>
                            <TableContainer>
                                <Box overflowY="auto" maxHeight="10vh">
                                    <Table variant="simple">
                                        <Tbody>
                                            <Tr>
                                                <Td>
                                                    <a id="art">Art</a>
                                                </Td>
                                                <Td>Business</Td>
                                                <Td>Classics</Td>
                                                <Td>Cookbooks</Td>
                                                <Td>Ebooks</Td>
                                                <Td>Fiction</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>
                                                    <a id="biography">
                                                        Biography
                                                    </a>
                                                </Td>
                                                <Td>Children</Td>
                                                <Td>Comics</Td>
                                                <Td>Crime</Td>
                                                <Td>Fantasy</Td>
                                                <Td>History</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Box>
                            </TableContainer>
                        </PopoverBody>
                        <PopoverHeader ml="3" bg="gray.50" as="b">
                            Nonfiction
                        </PopoverHeader>
                        <PopoverBody>
                            <TableContainer>
                                <Box overflowY="auto" maxHeight="10vh">
                                    <Table>
                                        <Tbody>
                                            <Tr>
                                                <Td>
                                                    <a id="art">Art</a>
                                                </Td>
                                                <Td>Business</Td>
                                                <Td>Classics</Td>
                                                <Td>Cookbooks</Td>
                                                <Td>Ebooks</Td>
                                                <Td>Fiction</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>
                                                    <a id="biography">
                                                        Biography
                                                    </a>
                                                </Td>
                                                <Td>Children</Td>
                                                <Td>Comics</Td>
                                                <Td>Crime</Td>
                                                <Td>Fantasy</Td>
                                                <Td>History</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Box>
                            </TableContainer>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </HStack>
            {/* TODO: breakdown of how the boolean statement works */}
            {/* map function can only be used on an array */}
            <SimpleGrid columns={4} spacing={5} mb="100px">
                {data &&
                    data.works.map((card) => {
                        return <CategoriesBook key={card.key} card={card} />;
                    })}
            </SimpleGrid>
            {/* TODO: add a "see more" button */}
        </Container>
    );
}
