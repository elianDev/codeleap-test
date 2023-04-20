import UserActionTypes, { UserAction } from "./action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        currentUser: "elian",
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
