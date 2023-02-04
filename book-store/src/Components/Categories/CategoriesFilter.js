import { Td } from '@chakra-ui/react';

const { param } = useParams();
const navigate = useNavigate();
const handleSelectCategory = (id) => {
    navigate(`/categories/${id}`);
};

export default function CategoriesFilter() {
    {
        FICTION_SUBJECTS.map((item, index) => {
            return (
                <Td id={index}>
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
                </Td>
            );
        });
    }
}
