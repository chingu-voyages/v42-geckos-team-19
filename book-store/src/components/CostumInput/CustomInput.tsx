import { useField, FieldHookConfig } from "formik";
import { InputHTMLAttributes, FC } from "react";

type CustomInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomInput: FC<CustomInputProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props as FieldHookConfig<string>);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
