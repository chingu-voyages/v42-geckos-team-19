import { Stack } from "@chakra-ui/react";
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
    if (error) return;
    dispatch(signIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack
            my="4"
            spacing="6"
            padding="20"
            borderWidth="1px"
            height="600px"
            align="center"
          >
            <Heading as="h2" size="lg" mb="3">
              LOGIN
            </Heading>
            <CustomInput name="email" type="text" placeholder="Enter email" />
            <CustomInput
              name="password"
              type="text"
              placeholder="Enter password"
              mb="2"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              width="200px"
              colorScheme="gray"
            >
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
