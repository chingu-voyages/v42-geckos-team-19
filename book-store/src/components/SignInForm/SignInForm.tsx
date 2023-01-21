import { Container, Stack } from "@chakra-ui/react";
import { Formik, Form, FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { signInSchema } from "../../schemas";
import { selectError, signIn, SignInPayload } from "../../store/user/userSlice";
import CustomInput from "../CostumInput/CustomInput";
import { Button, Heading } from "@chakra-ui/react";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);

  const handleSubmit = async (
    values: SignInPayload,
    actions: FormikHelpers<SignInPayload>
  ) => {
    await new Promise((r) => setTimeout(r, 500));
    dispatch(signIn(values)).then((res) => {
      if (res.type.includes("rejected")) {
        return;
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
      {({ isSubmitting }) => (
        <Form>
          <Container maxW="8xl" borderWidth="1px">
            <Stack
              my="4"
              spacing="7"
              p="12"
              h="650px"
              align="center"
              w={{ sm: "sm", md: "base", lg: "md", xl: "lg" }}
            >
              <Heading as="h2" size="lg" mb="3" fontWeight="500">
                LOGIN
              </Heading>
              <CustomInput name="email" type="text" placeholder="Enter email" />
              <CustomInput
                name="password"
                type="password"
                placeholder="Enter password"
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
            </Stack>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
