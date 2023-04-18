import { InputHTMLAttributes } from "react";
import { InputContainer, LabelContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
}

const Input = ({ id, label, placeholder, ...props }: InputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <LabelContainer htmlFor={id}>{label}</LabelContainer>
      <InputContainer
        id={id}
        placeholder={placeholder}
        {...props}
        {...register(id, { required: true })}
      />
    </div>
  );
};

export default Input;
