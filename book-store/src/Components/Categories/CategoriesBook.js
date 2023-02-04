import React from 'react';
import {
    Box,
    Card,
    CardBody,
    Heading,
    Text,
    Divider,
    Image,
    Stack,
    Grid,
    GridItem,
    Button,
    HStack
} from '@chakra-ui/react';
import { AuthErrorCodes } from 'firebase/auth';

export default function BookCard(props) {
    /* TODO: try to display cover without function? */
    /* Display book cover */
    function BookCover({ cover_id }) {
        let str = 'https://covers.openlibrary.org/b/id/' + cover_id + '-L.jpg';
        return <Image src={str} alt="" borderRadius="lg" boxSize="50vh" />;
    }

    /* TODO: Length of titles and authors not responsive */
    /* Truncate long titles */
    function Title({ title }) {
        if (title.length > 38) {
            let str = '';
            for (let i = 0; i < 38; i++) {
                str += title[i];
            }
            str += '...';
            return str;
        } else {
            return title;
        }
    }

    /* Truncate long author names */
    function Author({ author }) {
        if (author.length > 20) {
            let str = '';
            for (let i = 0; i < 19; i++) {
                str += author[i];
            }
            str += '...';
            return str;
        } else {
            return author;
        }
    }

    return (
        <Card
            maxW="sm"
            boxShadow="xl"
            my={{ base: 5, md: 50 }}
            fontFamily="Poppins"
            fontSize="sm"
        >
            <CardBody>
                <Box height="50vh">
                    <BookCover cover_id={props.card.cover_id} />
                </Box>
                <Stack mt="6" spacing="3">
                    <Heading size="xs">
                        {/* Shorten titles to fit on card */}
                        <Title title={props.card.title} />
                    </Heading>
                </Stack>
                <Divider mt="3" mb="5" borderColor="#D9D9D9" />
                <Grid templateRows="repeat(2, 1fr)" gap={2} mb="5">
                    <GridItem w="100%" h="5">
                        <HStack>
                            <Box width="15vw">
                                <Text color="#61625F">Author</Text>
                            </Box>
                            <Text color="#61625F">Price</Text>
                        </HStack>
                    </GridItem>
                    <GridItem w="100%" h="5">
                        <HStack>
                            <Box width="15vw">
                                <Text as="b" fontSize="xs">
                                    {/* Shorten author names to fit on card */}
                                    <Author
                                        author={props.card.authors[0].name}
                                    />
                                </Text>
                            </Box>
                            <Text as="b">
                                ${(Math.random() * 30 + 10).toFixed(2)}
                            </Text>
                        </HStack>
                    </GridItem>
                </Grid>
                <Stack align="center">
                    {/* FIX: button not changing color on hover */}
                    <Button
                        bgColor="white"
                        color="#E4573D"
                        colorScheme="E4573D"
                        size="sm"
                        rounded="sm"
                        px="12"
                        py="6"
                        mt="2"
                        variant="outline"
                        _hover={{ bg: '#E4573D', color: 'white' }}
                        letterSpacing="2px"
                    >
                        More Details
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    );
}
