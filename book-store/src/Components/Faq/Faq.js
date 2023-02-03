import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider,
    Heading,
    Stack,
    chakra,
    Image,
    Container
} from '@chakra-ui/react';
import './Faq.css';

export default function Faq() {
    return (
        <Container maxW="100%" mt={{ base: 250, md: 700 }} mb="200">
            <Stack alignItems="center" mb="60px">
                <Heading
                    color="#E4573D"
                    as="i"
                    mb="3"
                    fontWeight="400"
                    fontFamily="Libre Baskerville"
                    fontSize="50px"
                    id="faq"
                >
                    Ask us Anything
                </Heading>
                <Divider orientation="horizontal" borderColor="#D9D9D9" />
            </Stack>
            <Stack
                bg="#F4F3EC"
                p="50px"
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: '0', sm: '24px' }}
                alignItems="center"
            >
                <Box
                    bg="white"
                    rounded="sm"
                    w={{ base: '100%', md: '50%' }}
                    mb={{ base: '25px', md: '0' }}
                >
                    <Accordion
                        allowToggle
                        p="40px"
                        mb="20px"
                        borderColor="#d9d9d9"
                    >
                        <chakra.h2
                            fontSize="40px"
                            pl="20px"
                            pb="20px"
                            fontFamily="Libre Baskerville"
                        >
                            FAQ
                        </chakra.h2>
                        <AccordionItem>
                            <h2>
                                <AccordionButton
                                    _expanded={{
                                        color: '#E4573D',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        py="20px"
                                        fontFamily="Libre Baskerville"
                                        letterSpacing="2px"
                                    >
                                        Important information
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontFamily="Poppins">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton
                                    _expanded={{
                                        color: '#E4573D',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        py="20px"
                                        fontFamily="Libre Baskerville"
                                        letterSpacing="2px"
                                    >
                                        Fees for US countries
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontFamily="Poppins">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton
                                    _expanded={{
                                        color: '#E4573D',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        py="20px"
                                        fontFamily="Libre Baskerville"
                                        letterSpacing="2px"
                                    >
                                        International orders
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontFamily="Poppins">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box bg="#F4F3EC" w={{ base: '100%', md: '50%' }}>
                    <Image
                        src="../images/faq-mockup.png"
                        boxSize={{ base: '80%', md: '100%' }}
                    ></Image>
                </Box>
            </Stack>
        </Container>
    );
}
