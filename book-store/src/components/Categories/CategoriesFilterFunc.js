import { GridItem } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';

// Must manually specify extension; too many variations
const FICTION_SUBJECTS = [
    ['Romance', 'fiction_romance_general'],
    ['Thrillers', 'fiction_thrillers_general'],
    ['Mystery & detective', 'fiction_mystery_&_detective_general'],
    ['Horror', 'fiction_horror'],
    ["Children's fiction", "children's_fiction"],
    ['Crime', 'crime_fiction'],
    ['Science fiction', 'fiction_science_fiction_general']
].sort();

const NONFICTION_SUBJECTS = [
    ['Finance', 'finance'],
    ['Biography', 'biography'],
    ['Travel', 'travel'],
    ['Business', 'business'],
    ['Religion', 'religion'],
    ['Cookbooks', 'cookbooks'],
    ['Self-help', 'self-help'],
    ['Psychology', 'psychology'],
    ['Music', 'music'],
    ['Education', 'education'],
    ['Anthropology', 'anthropology'],
    ['Environment', 'environment'],
    ['Sports', 'sports'],
    ['Science', 'science'],
    ['Politics', 'politics_and_government']
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
                        <GridItem>
                            <a
                                onClick={() =>
                                    handleSelectCategory(`${item[1]}`)
                                }
                                id={item[0]}
                            >
                                {item[0]}
                            </a>
                        </GridItem>
                    );
                }
            )}
        </>
    );
}
