import { Formik, Form, FormikHelpers } from "formik";
import { useAppDispatch } from "../../hooks";
import { signInSchema } from "../../schemas";
import { signIn, SignInPayload } from "../../store/user/userSlice";
import CustomInput from "../CostumInput/CustomInput";

const SignInForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: SignInPayload,
    actions: FormikHelpers<SignInPayload>
  ) => {
    await new Promise((r) => setTimeout(r, 500));
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
          <CustomInput
            label="Email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
