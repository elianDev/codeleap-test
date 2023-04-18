import { useForm, FormProvider } from "react-hook-form";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { LoginContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const loginInputSchema = z.object({
  username: z.string(),
});

type LoginFormInput = z.infer<typeof loginInputSchema>;

const username = import.meta.env.VITE_USERNAME;

const LoginPage = () => {
  const loginForm = useForm<LoginFormInput>({
    resolver: zodResolver(loginInputSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = loginForm;
  const navigate = useNavigate();

  function handleLogin(data: LoginFormInput) {
    if (username === data.username) navigate("/main");
    else console.log("erro");
  }

  return (
    <FormProvider {...loginForm}>
      <LoginContainer onSubmit={handleSubmit(handleLogin)}>
        <h1>Welcome to CodeLeap network!</h1>
        <Input
          type="input"
          id="username"
          placeholder="John doe"
          label="Please enter your username"
        />
        <Button border={false} text="ENTER" color="blue" disabled={!isValid} />
      </LoginContainer>
    </FormProvider>
  );
};

export default LoginPage;
