import UserActionTypes from "../redux/user/action-types";

export const loginUser = () => {
  return {
    type: UserActionTypes.LOGIN,
  };
};

export const logoutUser = () => {
  return {
    type: UserActionTypes.LOGOUT,
  };
};
