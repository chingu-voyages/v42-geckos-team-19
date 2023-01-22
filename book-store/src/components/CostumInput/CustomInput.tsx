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
      pos="relative"
    >
      <Input
        {...field}
        {...props}
        focusBorderColor={meta.touched && meta.error ? "red.300" : ""}
        h="12"
      />
      {meta.touched && meta.error && (
        <FormErrorMessage pos="absolute" top="41px">
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
