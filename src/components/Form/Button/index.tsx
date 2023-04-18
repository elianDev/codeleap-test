import { ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: ButtonVariant;
  textColor?: "white" | "black";
  border: boolean;
}

const Button = ({
  text,
  color,
  textColor = "white",
  border,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      color={color}
      border={border}
      textColor={textColor}
      {...props}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
