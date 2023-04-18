import {
  PostCardContainer,
  PostCardContentContainer,
  PostCardDetailsContainer,
  PostCardTextContainer,
} from "./styles";
import deleteImg from "../../../../assets/delete.svg";
import editImg from "../../../../assets/edit.svg";
import * as Dialog from "@radix-ui/react-dialog";
import Modal from "../Modal";
import { useState } from "react";

const PostCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <PostCardContainer>
      <header>
        <h2>My First Post at CodeLeap Network!</h2>

        <div>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button>
                <img src={deleteImg} alt="Delete post" />
              </button>
            </Dialog.Trigger>

            <Modal type="delete" />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <img src={editImg} alt="Edit post" />
              </button>
            </Dialog.Trigger>

            <Modal type="edit" />
          </Dialog.Root>
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
