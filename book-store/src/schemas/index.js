import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
const displayNameRules = /^[A-Za-z\s]+$/;
export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
});

export const signUpSchema = yup.object().shape({
  displayName: yup
    .string()
    .required("Name is required")
    .matches(displayNameRules, "Please add a name with only letter"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  confirmEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required")
    .oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup
    .string()
    .min(6)
    .matches(
      passwordRules,
      "Password must contain 1 lowercase, 1 uppercase, 1 number and at least 6 characters."
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(6)
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
