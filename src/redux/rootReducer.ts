import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import postsReducer from "./posts/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: userReducer,
  post: postsReducer,
});

export default rootReducer;
