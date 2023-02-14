import { Formik, Form, FormikHelpers } from "formik";
import { signUpSchema } from "../../schemas";
import { Container, Stack, Heading, Button } from "@chakra-ui/react";
import CustomInput from "../CostumInput/CustomInput";
import { useAppDispatch } from "../../hooks";
import { signUp } from "../../store/user/userSlice";
import { SignUpPayload } from "../../store/user/types";

type SignUpValues = {
  confirmPassword: string;
  confirmEmail: string;
} & SignUpPayload;

const SignUpForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    { email, password, displayName }: SignUpPayload,
    actions: FormikHelpers<SignUpValues>
  ) => {
    await new Promise((r) => setTimeout(r, 500));
    dispatch(signUp({ email, password, displayName })).then((res) => {
      if (res.type.includes("rejected")) {
        return actions.setErrors({ email: "Email already in use" });
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
                spacing="8"
                p="12"
                h="700px"
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
                  id="email_signup"
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
                  mb="3"
                  id="email_signup"
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
