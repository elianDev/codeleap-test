import React, { TextareaHTMLAttributes } from "react";
import { TextareaContainer } from "./styles";
import { LabelContainer } from "../Input/styles";
import { useFormContext } from "react-hook-form";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  placeholder: string;
}

const Textarea = ({ id, label, placeholder, ...props }: InputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <LabelContainer htmlFor={id}>{label}</LabelContainer>
      <TextareaContainer
        id={id}
        placeholder={placeholder}
        {...props}
        {...register(id)}
      />
    </div>
  );
};

export default Textarea;
