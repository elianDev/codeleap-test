import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { LoginContainer } from "./styles";

const LoginPage = () => {
  return (
    <LoginContainer>
      <h1>Welcome to CodeLeap network!</h1>
      <Input
        type="input"
        label="Please enter your username"
        id="username"
        placeholder="John doe"
      />
      <Button border={false} text="ENTER" color="blue" />
    </LoginContainer>
  );
};

export default LoginPage;
