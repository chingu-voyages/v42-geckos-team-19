import { Container, Stack, Text } from "@chakra-ui/react";
import { Formik, Form, FormikHelpers } from "formik";
import { useAppDispatch } from "../../hooks";
import { signInSchema } from "../../schemas";
import { signIn } from "../../store/user/userSlice";
import { SignInPayload } from "../../store/user/types";
import CustomInput from "../CustomInput/CustomInput";
import { Button, Heading } from "@chakra-ui/react";
import { FC } from "react";

interface ErrorStatus {
  error: string;
}

const DisplayError: FC<{ status?: ErrorStatus }> = ({ status }) => {
  if (status && status.error) {
    return <Text color="red.400">{status.error}</Text>;
  }
  return null;
};

const SignInForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: SignInPayload,
    actions: FormikHelpers<SignInPayload>
  ) => {
    await new Promise((r) => setTimeout(r, 500));
    dispatch(signIn(values)).then((res) => {
      if (res.type.includes("rejected")) {
        return actions.setStatus({ error: res.payload });
      }
      actions.resetForm();
    });
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <Container maxW="8xl" borderWidth="1px">
            <Stack
              my="4"
              spacing="7"
              p="12"
              h="700px"
              align="center"
              w={{ sm: "sm", md: "base", lg: "md", xl: "lg" }}
            >
              <Heading as="h2" size="lg" mb="3" fontWeight="500">
                LOGIN
              </Heading>
              <CustomInput
                name="email"
                type="text"
                placeholder="Enter email"
                id="email_signin"
              />
              <CustomInput
                name="password"
                type="password"
                placeholder="Enter password"
                id="password_signin"
                mb="2"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                w="100%"
                colorScheme="gray"
              >
                Login
              </Button>
              <DisplayError status={status} />
            </Stack>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
