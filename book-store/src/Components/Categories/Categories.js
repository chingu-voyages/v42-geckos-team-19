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
import { useParams, useNavigate } from 'react-router-dom';

const FICTION_SUBJECTS = [
    'Fantasy',
    'Romance',
    'Historical',
    'Science fiction'
];

const NONFICTION_SUBJECTS = [
    'Biography',
    'Business',
    'Finance',
    'Travel',
    'Religion & spirituality'
];

export default function Categories() {
    const { param } = useParams();
    const navigate = useNavigate();
    const handleSelectCategory = (id) => {
        navigate(`/categories/${id}`);
    };

    /* Don't have to use isLoading, isError--just for future ref */
    const { data, isLoading, isError } = useGetBooksBySubjectQuery(param);

    console.log(param);
    return (
        <Container maxW="1400px">
            <HStack spacing="5" mt="20" ml="5">
                <Heading size="2xl">Sort books by</Heading>
                <Popover>
                    <PopoverTrigger>
                        <Button mx="5" p="6" size="lg">
                            <Box fontSize="1.5em" mb="1">
                                {param.includes('fiction')
                                    ? 'Fiction > ' +
                                      param.replace(/fiction|general|_/gi, '')
                                    : 'Nonfiction > ' +
                                      param
                                          .replace(/fiction|general/gi, '')
                                          .replace(/(_).*(_)/, ' & ')}
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
                                                {FICTION_SUBJECTS.map(
                                                    (item, index) => {
                                                        return (
                                                            <Td id={index}>
                                                                <a
                                                                    onClick={() =>
                                                                        handleSelectCategory(
                                                                            `fiction_${item
                                                                                .toLowerCase()
                                                                                .replace(
                                                                                    ' ',
                                                                                    '_'
                                                                                )}_general`
                                                                        )
                                                                    }
                                                                    id={item}
                                                                >
                                                                    {item}
                                                                </a>
                                                            </Td>
                                                        );
                                                    }
                                                )}
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
                                {/* FIX: Create another component to turn all the table cells into map function */}
                                <Box overflowY="auto" maxHeight="10vh">
                                    <Table>
                                        <Tbody>
                                            {NONFICTION_SUBJECTS.map(
                                                (item, index) => {
                                                    return (
                                                        <Td id={index}>
                                                            <a
                                                                onClick={() =>
                                                                    handleSelectCategory(
                                                                        `${item
                                                                            .toLowerCase()
                                                                            .replace(
                                                                                /&/gi,
                                                                                ''
                                                                            )
                                                                            .replace(
                                                                                /\s/gi,
                                                                                '_'
                                                                            )}`
                                                                    )
                                                                }
                                                                id={item}
                                                            >
                                                                {item}
                                                            </a>
                                                        </Td>
                                                    );
                                                }
                                            )}
                                        </Tbody>
                                    </Table>
                                </Box>
                            </TableContainer>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </HStack>
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
