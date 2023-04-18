import { FormContainer } from "./styles";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Form/Button";
import { ReactNode } from "react";

interface FormProps {
  modal?: boolean;
  children: ReactNode;
}

const Form = ({ modal, children }: FormProps) => {
  return (
    <>
      {modal ? (
        <FormContainer modal={modal}>
          <h2>Edit item</h2>
          <Input
            type="input"
            label="Title"
            id="title"
            placeholder="Hello world"
          />
          <Input
            type="textarea"
            label="Content"
            id="content"
            placeholder="Content here"
          />
          <div className="buttons">
            {children}
            <Button type="submit" color="green" text="Save" border={false} />
          </div>
        </FormContainer>
      ) : (
        <FormContainer>
          <h2>What’s on your mind?</h2>
          <Input
            type="input"
            label="Title"
            id="title"
            placeholder="Hello world"
          />
          <Input
            type="textarea"
            label="Content"
            id="content"
            placeholder="Content here"
          />

          <Button type="submit" color="blue" text="Create" border={false} />
        </FormContainer>
      )}
    </>
  );
};

export default Form;
