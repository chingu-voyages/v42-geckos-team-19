import {
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import UserIcon from "../../assets/images/userpicture.png";
import {
  BiEnvelope,
  BiPhone,
  BiBuildingHouse,
  BiCreditCard,
} from "react-icons/bi";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSlice";
import {useEffect} from 'react';

type TextIconProps = { icon: IconType; text: string };

const TextIcon = ({ icon, text }: TextIconProps) => {
  return (
    <Flex alignItems="center" gap="6" mb="4">
      <Icon as={icon} boxSize="6" />
      <Text fontSize="18">{text}</Text>
    </Flex>
  );
};

const UserAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Center mt={16}>
      {currentUser ? (
        <Flex
          gap={{ base: "8", md: "24" }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex justifyContent="flex-start" direction="column">
            <Heading mb="8">John Smith</Heading>
            <TextIcon icon={BiEnvelope} text={currentUser.email} />
            <TextIcon icon={BiPhone} text="+ 123 456 789" />
            <TextIcon
              icon={BiBuildingHouse}
              text="Hellostreet 35, New York United States"
            />
            <TextIcon icon={BiCreditCard} text="...4321" />
          </Flex>
          <Image src={UserIcon} boxSize="72" />
        </Flex>
      ) : (
        <Spinner mt="100" />
      )}
    </Center>
  );
};

export default UserAccount;
