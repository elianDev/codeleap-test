import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps {
  text: string;
  color: ButtonVariant;
  textColor?: "white" | "black";
  border: boolean;
}

const Button = ({ text, color, textColor = "white", border }: ButtonProps) => {
  return (
    <ButtonContainer color={color} border={border} textColor={textColor}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
