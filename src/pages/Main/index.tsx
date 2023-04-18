import FormCreate from "./components/FormCreate";
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
        <FormCreate />

        <PostCard />
      </MainContentContainer>
    </MainPageContainer>
  );
};

export default MainPage;
