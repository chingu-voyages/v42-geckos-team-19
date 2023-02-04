import { Td } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';

const FICTION_SUBJECTS = [
    'Science fiction',
    'Fantasy',
    'Historical',
    'Romance'
].sort();

const NONFICTION_SUBJECTS = [
    'Finance',
    'Biography',
    'Travel',
    'Business',
    'Religion & spirituality'
].sort();

export default function CategoriesFilter({ fiction }) {
    const { param } = useParams();
    const navigate = useNavigate();
    const handleSelectCategory = (id) => {
        navigate(`/categories/${id}`);
    };

    return (
        <>
            {(fiction ? FICTION_SUBJECTS : NONFICTION_SUBJECTS).map(
                (item, index) => {
                    return (
                        <Td id={index}>
                            {fiction ? (
                                <a
                                    onClick={() =>
                                        handleSelectCategory(
                                            `fiction_${item
                                                .toLowerCase()
                                                .replace(' ', '_')}_general`
                                        )
                                    }
                                    id={item}
                                >
                                    {item}
                                </a>
                            ) : (
                                <a
                                    onClick={() =>
                                        handleSelectCategory(
                                            `${item
                                                .toLowerCase()
                                                .replace(/&/gi, '')
                                                .replace(/\s/gi, '_')}`
                                        )
                                    }
                                    id={item}
                                >
                                    {item}
                                </a>
                            )}
                        </Td>
                    );
                }
            )}
        </>
    );
}
