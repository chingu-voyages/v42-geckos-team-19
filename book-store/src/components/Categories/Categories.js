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
import { useGetWorksBySubjectQuery } from '../../store/books/booksSlice';
import CategoriesBook from '../Categories/CategoriesBook';
import './Categories.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoriesFilterFunc from './CategoriesFilterFunc';

// TODO: Possibly only rerender when all CategoriesBook comps are fully loaded
// I.e. when map function is complete?


export default function Categories() {
    
    let { param } = useParams();
    const navigate = useNavigate();
    const [offset, setOffset] = useState(0);
    const limit = 20;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [offset])

    /* Don't have to use isLoading, isError--just for future ref */
    const { data, isLoading, isError } = useGetWorksBySubjectQuery({
        subject: param,
        limit,
        offset
    });

    console.log(isLoading, data);
    param = param ? param : 'no-param-supplied';
    return (
        <Container maxW="1400px">
            {(isLoading)
                ? (
                    <>Loading . . .</>
                )
                : (
                    <>
                    {
    console.log({offset, limit, work_count: data.work_count})}
                        <HStack spacing="5" mt="20" ml="5">
                            <Heading size="2xl">Sort books by</Heading>
                            <Popover>
                                <PopoverTrigger>
                                    <Button mx="5" p="6" size="lg">
                                        <Box fontSize="1.5em" mb="1">
                                            {(param.includes('fiction')
                                                ? 'Fiction > '
                                                : 'Nonfiction > ') +
                                                param
                                                    .replace(/_/gi, ' ')
                                                    .replace(/fiction|general/gi, '')}
                                        </Box>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent ml="10em" w="80vw">
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader textAlign="center">
                                        Select a category
                                    </PopoverHeader>
                                    <PopoverHeader bg="gray.50" as="b">
                                        <Text ml="2">Fiction</Text>
                                    </PopoverHeader>
                                    <PopoverBody>
                                        <TableContainer>
                                            <Box overflowY="auto" maxHeight="10vh">
                                                {/* FIX: Make uniform grid to display genres */}
                                                <Table variant="simple" size="sm">
                                                    <Tbody>
                                                        <CategoriesFilterFunc fiction={1} />
                                                    </Tbody>
                                                </Table>
                                            </Box>
                                        </TableContainer>
                                    </PopoverBody>
                                    <PopoverHeader bg="gray.50" as="b">
                                        <Text ml="2">Nonfiction</Text>
                                    </PopoverHeader>
                                    <PopoverBody>
                                        <TableContainer>
                                            <Box overflowY="auto" maxHeight="10vh">
                                                {/* FIX: Make uniform grid to display genres */}
                                                <Table variant="simple">
                                                    <Tbody>
                                                        <CategoriesFilterFunc fiction={0} />
                                                    </Tbody>
                                                </Table>
                                            </Box>
                                        </TableContainer>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </HStack>
                        {/* map function can only be used on an array */}
                        <SimpleGrid columns={4} spacing={5} >
                            {data &&
                                data.works.map((card) => {
                                    return <CategoriesBook bookKey={card.key} card={card} />;
                                })}
                        </SimpleGrid>

                        {
                            // TODO: Double check this logic is correct for showing all items
                            (offset + limit  < data.work_count)
                                ? (
                                    <Box textAlign="center">
                                        <Button
                                            mb="24px"
                                            bgColor="#E4573D"
                                            color="white"
                                            colorScheme="E4573D"
                                            size="sm"
                                            rounded="sm"
                                            px="12"
                                            py="6"
                                            mt="2"
                                            variant="outline"
                                            _hover={{ bg: '#F49B8B', color: 'black' }}
                                            letterSpacing="2px"

                                            onClick={() => {
                                                setOffset(oldOffset => oldOffset += 20);

                                            }}>

                                            See More

                                        </Button>
                                    </Box>
                                )
                                : (
                                    null
                                )
                        }
                    </>
                )}
        </Container>
    );
}
