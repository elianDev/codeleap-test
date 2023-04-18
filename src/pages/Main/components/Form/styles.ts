import styled from "styled-components";

export const FormCreateContainer = styled.form`
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
`;
