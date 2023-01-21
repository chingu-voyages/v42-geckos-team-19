import { Formik, Form, FormikHelpers } from "formik";
import { signUpSchema } from "../../schemas";
import { Container, Stack, Heading, Button } from "@chakra-ui/react";
import CustomInput from "../CostumInput/CustomInput";
import { useAppDispatch } from "../../hooks";
import { signUp, SignUpPayload } from "../../store/user/userSlice";

type SignUpValues = {
  confirmPassword: string;
  confirmEmail: string;
} & SignUpPayload;

const SignUpForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: SignUpValues,
    actions: FormikHelpers<SignUpValues>
  ) => {
    await new Promise((r) => setTimeout(r, 500));
    const { email, password, displayName } = values;
    dispatch(signUp({ email, password, displayName })).then((res) => {
      if (res.type.includes("rejected")) {
        return;
      }
      actions.resetForm();
    });
  };
  return (
    <>
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
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
                  SIGN UP
                </Heading>
                <CustomInput
                  name="displayName"
                  type="text"
                  placeholder="Enter your name"
                />
                <CustomInput
                  name="email"
                  type="text"
                  placeholder="Enter email"
                />
                <CustomInput
                  name="confirmEmail"
                  type="text"
                  placeholder="Confirm email"
                />

                <CustomInput
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  mb="2"
                />
                <CustomInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  mb="2"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  w="100%"
                  colorScheme="gray"
                >
                  Sign up
                </Button>
              </Stack>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
