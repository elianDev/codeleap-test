import Form from "./components/Form";
import PostCard from "./components/PostCard";
import {
  HeaderContainer,
  MainContentContainer,
  MainPageContainer,
} from "./styles";

const MainPage = () => {
  return (
    <MainPageContainer>
      <HeaderContainer>
        <h1>CodeLeap Network</h1>
      </HeaderContainer>

      <MainContentContainer>
        <Form />

        <PostCard />
      </MainContentContainer>
    </MainPageContainer>
  );
};

export default MainPage;
