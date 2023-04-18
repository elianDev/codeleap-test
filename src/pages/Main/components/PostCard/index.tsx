import {
  PostCardContainer,
  PostCardContentContainer,
  PostCardDetailsContainer,
  PostCardTextContainer,
} from "./styles";
import deleteImg from "../../../../assets/delete.svg";
import editImg from "../../../../assets/edit.svg";

const PostCard = () => {
  return (
    <PostCardContainer>
      <header>
        <h2>My First Post at CodeLeap Network!</h2>

        <div>
          <button>
            <img src={deleteImg} alt="Delete post" />
          </button>
          <button>
            <img src={editImg} alt="Edit post" />
          </button>
        </div>
      </header>

      <PostCardContentContainer>
        <PostCardDetailsContainer>
          <strong>@Victor</strong>
          <span>25 minutes ago</span>
        </PostCardDetailsContainer>

        <PostCardTextContainer>
          <p>
            Curabitur suscipit suscipit tellus. Phasellus consectetuer
            vestibulum elit. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
            quis ligula mattis placerat. Duis vel nibh at velit scelerisque
            suscipit.
          </p>
          <p>
            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
            cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
            sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia
            erat.
          </p>
        </PostCardTextContainer>
      </PostCardContentContainer>
    </PostCardContainer>
  );
};

export default PostCard;
