import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps {
  text: string;
  color: ButtonVariant;
  border: boolean;
}

const Button = ({ text, color, border }: ButtonProps) => {
  return (
    <ButtonContainer color={color} border={border}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
