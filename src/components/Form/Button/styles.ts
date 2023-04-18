import styled, { css } from "styled-components";

export type ButtonVariant = "blue" | "red" | "green" | "white";

interface ButtonContainerProps {
  color: ButtonVariant;
  border: boolean;
  textColor: "white" | "black";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  height: 32px;
  text-align: center;
  color: ${({ theme }) => theme["base-white"]};
  border-radius: 8px;
  padding: 0.42rem 1.875rem;
  font-weight: bold;
  border: 1px solid transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["base-background"]};
    transition: background 0.2s;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  ${({ theme, textColor }) => css`
    color: ${theme[`base-${textColor}`]};
  `}

  ${({ theme, border }) =>
    border &&
    css`
      border-color: ${theme["base-border"]};
    `}

  ${({ theme, color }) => css`
    background: ${theme[`base-${color}`]};
  `}
`;
