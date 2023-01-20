import { useField, FieldHookConfig } from "formik";
import { InputHTMLAttributes, FC } from "react";
import {
  Input,
  InputProps,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & InputProps;

const CustomInput: FC<CustomInputProps> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props as FieldHookConfig<string>);

  return (
    <FormControl
      id={props.name}
      isInvalid={Boolean(meta.error) && Boolean(meta.touched)}
    >
      <Input
        {...field}
        {...props}
        focusBorderColor={meta.touched && meta.error ? "red.300" : ""}
        width="400px"
        height="50px"
      />
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
