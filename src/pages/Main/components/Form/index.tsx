import { FormContainer } from "./styles";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Form/Button";
import { ReactNode } from "react";
import Textarea from "../../../../components/Form/Textarea";
import { useFormContext } from "react-hook-form";
import { PostFormData } from "../..";

interface FormProps {
  modal?: boolean;
  children?: ReactNode;
}

const Form = ({ modal, children }: FormProps) => {
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext<PostFormData>();

  function handleEditPost(data: PostFormData) {
    console.log(data);
  }

  function handleCreatePost(data: PostFormData) {
    console.log(data);
  }

  return (
    <>
      {modal ? (
        <FormContainer modal={modal} onSubmit={handleSubmit(handleEditPost)}>
          <h2>Edit item</h2>
          <Input label="Title" id="title" placeholder="Hello world" />
          <Textarea label="Content" id="content" placeholder="Content here" />
          <div className="buttons">
            {children}
            <Button
              type="submit"
              color="green"
              text="Save"
              border={false}
              disabled={!isValid}
            />
          </div>
        </FormContainer>
      ) : (
        <FormContainer onSubmit={handleSubmit(handleCreatePost)}>
          <h2>What’s on your mind?</h2>
          <Input label="Title" id="title" placeholder="Hello world" />
          <Textarea label="Content" id="content" placeholder="Content here" />

          <Button
            type="submit"
            color="blue"
            text="Create"
            border={false}
            disabled={!isValid}
          />
        </FormContainer>
      )}
    </>
  );
};

export default Form;
