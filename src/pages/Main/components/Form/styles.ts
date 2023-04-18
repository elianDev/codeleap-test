import styled, { css } from "styled-components";

interface FormContainerProps {
  modal?: boolean;
}

export const FormContainer = styled.form<FormContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme["base-border"]};
  border-radius: 16px;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.375rem;
  }

  .button {
    align-self: flex-end;
    display: flex;
    gap: 1.5rem;
  }

  ${({ theme, modal }) =>
    modal &&
    css`
      border: 1px solid transparent;
      padding: 0;
      margin-bottom: 0;
    `}
`;
