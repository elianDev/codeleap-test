import React from "react";
import { FormEditContainer } from "./styles";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Form/Button";

const FormEdit = () => {
  return (
    <FormEditContainer>
      <Input type="input" label="Title" id="title" placeholder="Hello world" />
      <Input
        type="textarea"
        label="Content"
        id="content"
        placeholder="Content here"
      />
    </FormEditContainer>
  );
};

export default FormEdit;
