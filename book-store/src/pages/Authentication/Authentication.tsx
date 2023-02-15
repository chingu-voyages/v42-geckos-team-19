import { useEffect } from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import { Center, Heading, Stack, VStack } from "@chakra-ui/react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/account");
    }
  });

  return (
    <Center mb="32">
      <VStack>
        <Heading
          as="h1"
          borderBottom="4px"
          borderColor="gray.200"
          pb="3"
          mb="16"
        >
          MY ACCOUNT
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing="0">
          <SignInForm />
          <SignUpForm />
        </Stack>
      </VStack>
    </Center>
  );
};

export default Authentication;
