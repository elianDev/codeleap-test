export interface User {
  name: "elian";
}

interface UserState {
  currentUser: User | null;
}

interface LoginAction {
  type: typeof UserActionTypes.LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof UserActionTypes.LOGOUT;
}

export type UserAction = LoginAction | LogoutAction;

const UserActionTypes = {
  LOGIN: "user/login",
  LOGOUT: "user/logout",
};

export default UserActionTypes;
