import styled from "styled-components";

export const PostCardContainer = styled.article`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme["base-border"]};

  header {
    display: flex;
    border-radius: 16px 16px 0 0;
    overflow: auto;
    padding: 1.5rem;
    background: ${({ theme }) => theme["base-blue"]};
    align-items: center;
    justify-content: space-between;

    @media (max-width: 520px) {
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;
    }

    h2 {
      font-size: 1.375rem;
      color: ${({ theme }) => theme["base-white"]};

      @media (max-width: 520px) {
        font-size: 1.125rem;
      }
    }

    div {
      display: flex;
      gap: 2rem;

      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

export const PostCardContentContainer = styled.div`
  padding: 1.5rem;
`;

export const PostCardDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  strong,
  span {
    font-size: 1.125rem;
    color: ${({ theme }) => theme["base-span"]};
  }
`;

export const PostCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
