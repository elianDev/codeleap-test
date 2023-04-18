import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: ${({ theme }) => theme["base-modal-bg"]};
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme["base-white"]};
  padding: 1.5rem;
  width: 660px;
  border-radius: 16px;
  border: ${({ theme }) => theme["base-border"]};

  @media (max-width: 700px) {
    max-width: 400px;
  }

  @media (max-width: 430px) {
    max-width: 300px;
  }

  .buttons {
    margin-top: 2.5rem;
    display: flex;
    align-self: flex-end;
    gap: 1rem;

    @media (max-width: 430px) {
      flex-direction: column;
      align-self: stretch;
    }
  }
`;

export const Close = styled(Dialog.Close)`
  border: 0;
`;
