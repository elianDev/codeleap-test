import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme["base-span"]};
  padding: 0.5rem 0.7rem;
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme }) => theme["base-placeholder"]};
  }
`;

export const LabelContainer = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const TextareaContainer = styled.textarea`
  width: 100%;
  height: 4.625rem;
  border: 1px solid ${({ theme }) => theme["base-span"]};
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme["base-placeholder"]};
  }
`;
