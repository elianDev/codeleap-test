import React from "react";
import { FormCreateContainer } from "./styles";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Form/Button";

const FormCreate = () => {
  return (
    <FormCreateContainer>
      <h2>What’s on your mind?</h2>
      <Input type="input" label="Title" id="title" placeholder="Hello world" />
      <Input
        type="textarea"
        label="Content"
        id="content"
        placeholder="Content here"
      />
      <Button color="blue" text="Create" border={false} />
    </FormCreateContainer>
  );
};

export default FormCreate;
