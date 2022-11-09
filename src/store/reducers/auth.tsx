import {
  SET_AUTH_TYPE,
  SET_AUTO_LOGIN_TYPE,
  SET_LOGOUT_TYPE,
} from "../actionTypes";

const initialState = {
  user: {},
  autoLogin: false,
};

export const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_TYPE:
      return {
        ...state,
        user: action.user,
        autoLogin: true,
      };
    case SET_AUTO_LOGIN_TYPE:
      return {
        ...state,
        autoLogin: true,
      };
    case SET_LOGOUT_TYPE:
      return {
        ...initialState,
        autoLogin: true,
      };
    default:
      return state;
  }
};
