import { Td } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';

// Must manually specify extension; too many variations
const FICTION_SUBJECTS = [
    ['Romance', 'fiction_romance_general'],
    ['Thrillers', 'fiction_thrillers_general'],
    ['Mystery & detective', 'fiction_mystery_&_detective_general'],
    ['Horror', 'fiction_horror'],
    ["Children's fiction", "children's_fiction"],
    ['Crime', 'crime_fiction']
].sort();

const NONFICTION_SUBJECTS = [
    ['Finance', 'finance'],
    ['Biography', 'biography'],
    ['Travel', 'travel'],
    ['Business', 'business'],
    ['Religion', 'religion']
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
                        <Td id={index[0]}>
                            <a
                                onClick={() =>
                                    handleSelectCategory(`${item[1]}`)
                                }
                                // TODO: Check if id correctly initialized
                                id={item[0]}
                            >
                                {item[0]}
                            </a>
                        </Td>
                    );
                }
            )}
        </>
    );
}
