import { props } from "./types";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function SearchNavigationButtons(props: props) {




    return (
        <ButtonGroup>
            {(props.searchRes.data.offset !== 0)
                ? (
                    <Button
                        bgColor="white"
                        color="#E4573D"
                        colorScheme="E4573D"
                        size="md"
                        rounded="sm"
                        px="12"
                        py="6"
                        my="5"
                        variant="outline"
                        _hover={{ bg: "#E4573D", color: "white" }}
                        letterSpacing="2px"
                        onClick={e => props.setSearchParams(oldParams => {
                            let newParams = oldParams;
                            newParams.delete('offset');
                            let newOffset = 0;
                            if (props.offset > 9) {
                                newOffset = props.offset - 10;
                            } else if (props.offset <= 9) {
                                newOffset = 0;
                            }
                            newParams.append('offset', `${newOffset}`)
                            window.scrollTo(0, 0);
                            return newParams;
                        })}>Previous page</Button>
                )
                : (
                    null
                )
            }
            {(props.searchRes.data.offset + 1 < props.searchRes.data.numFound)
                ? (
                    <Button
                        bgColor="white"
                        color="#E4573D"
                        colorScheme="E4573D"
                        size="md"
                        rounded="sm"
                        px="12"
                        py="6"
                        my="5"
                        variant="outline"
                        _hover={{ bg: "#E4573D", color: "white" }}
                        letterSpacing="2px"
                        onClick={e => props.setSearchParams(oldParams => {
                            let newParams = oldParams;
                            newParams.delete('offset');
                            newParams.append('offset', `${props.offset + 10}`)
                            window.scrollTo(0, 0);
                            return newParams;
                        })}>Next page</Button>
                )
                : (
                    <>No more results!</>
                )
            }
        </ButtonGroup>
    )
}