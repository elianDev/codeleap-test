import * as Dialog from "@radix-ui/react-dialog";
import { Close, Content, Overlay } from "./styles";
import Button from "../../../../components/Form/Button";
import Form from "../Form";

interface ModalProps {
  type: "delete" | "edit";
}

const Modal = ({ type }: ModalProps) => {
  return (
    <Dialog.Portal>
      <Overlay />

      {type === "delete" ? (
        <Content>
          <Dialog.Title>
            Are you sure you want to delete this item?
          </Dialog.Title>
          <div className="buttons">
            <Close>
              <Button
                border={true}
                text="Cancel"
                color="white"
                textColor="black"
              />
            </Close>
            <Button border={false} text="Delete" color="red" />
          </div>
        </Content>
      ) : (
        <Content>
          <Form modal={true}>
            <Close>
              <Button
                border={true}
                text="Cancel"
                color="white"
                textColor="black"
              />
            </Close>
          </Form>
        </Content>
      )}
    </Dialog.Portal>
  );
};

export default Modal;
