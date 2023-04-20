import styled from "styled-components";

export const MainPageContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 1.68rem 2.37rem;
  background: ${({ theme }) => theme["base-blue"]};

  h1 {
    font-size: 1.375rem;
    color: ${({ theme }) => theme["base-white"]};
  }
`;

export const MainContentContainer = styled.section`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme["base-white"]};
  padding: 1.5rem;
`;
