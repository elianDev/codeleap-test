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
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Form/Button";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/user";
import { RootState } from "../../redux/rootReducer";

const postFormValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type PostFormData = typeof postFormValidationSchema;

const MainPage = () => {
  const { currentUser } = useSelector(
    (rootReducer: RootState) => rootReducer.user,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  const postForm = useForm({
    resolver: zodResolver(postFormValidationSchema),
  });

  return (
    <MainPageContainer>
      <HeaderContainer>
        <h1>CodeLeap Network</h1>
        <Button
          border={true}
          color="white"
          text="LOGOUT"
          textColor="black"
          onClick={handleLogout}
        />
      </HeaderContainer>

      <MainContentContainer>
        <FormProvider {...postForm}>
          <Form />

          <PostCard user={currentUser} />
        </FormProvider>
      </MainContentContainer>
    </MainPageContainer>
  );
};

export default MainPage;
