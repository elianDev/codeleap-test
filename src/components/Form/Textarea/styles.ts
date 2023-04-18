import styled from "styled-components";

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
