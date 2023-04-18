import { InputContainer, LabelContainer, TextareaContainer } from "./styles";

interface InputProps {
  id: string;
  label: string;
  type: "input" | "textarea";
  placeholder: string;
}

const Input = ({ id, label, type, placeholder, ...props }: InputProps) => {
  return (
    <div>
      <LabelContainer htmlFor={id}>{label}</LabelContainer>
      {type === "input" ? (
        <InputContainer id={id} placeholder={placeholder} {...props} />
      ) : (
        <TextareaContainer id={id} placeholder={placeholder} {...props} />
      )}
    </div>
  );
};

export default Input;
