import Form from "./components/Form";
import PostCard from "./components/PostCard";
import {
  HeaderContainer,
  MainContentContainer,
  MainPageContainer,
} from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const postFormValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type PostFormData = typeof postFormValidationSchema;

const MainPage = () => {
  const postForm = useForm({
    resolver: zodResolver(postFormValidationSchema),
  });

  return (
    <MainPageContainer>
      <HeaderContainer>
        <h1>CodeLeap Network</h1>
      </HeaderContainer>

      <MainContentContainer>
        <FormProvider {...postForm}>
          <Form />

          <PostCard />
        </FormProvider>
      </MainContentContainer>
    </MainPageContainer>
  );
};

export default MainPage;
