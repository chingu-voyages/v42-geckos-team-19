import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
});

export const signUpSchema = yup.object().shape({
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
    .matches(passwordRules, "Please add a stronger password")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(6)
    .matches(passwordRules, "Please add a stronger password")
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
