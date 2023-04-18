import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  max-height: 205px;
  margin: 30vh auto;
  padding: 1.5rem;
  background: ${({ theme }) => theme["base-white"]};
  border-radius: 1rem;

  h1 {
    font-size: 1.375rem;
    margin-bottom: 1.5rem;
  }
`;
