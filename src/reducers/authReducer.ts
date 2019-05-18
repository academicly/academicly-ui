import { User, ErrorMessage } from "../types";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_LOAD } from "./actions";

export const initialState = {
  isLoggedIn: false,
  user: {
    firstName: null,
    lastName: null,
    avatar: null
  },
  message: {
    type: null,
    code: null,
    message: null
  }
};

export const authReducer = (
  state: any,
  action: {
    type: string;
    user?: User;
    message?: ErrorMessage;
    isLoggedIn?: boolean;
  }
) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, user: action.user, isLoggedIn: false };
    }
    case LOGIN_LOAD: {
      return { ...state, user: action.user, isLoggedIn: action.isLoggedIn };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        message: action.message
      };
    }
    default:
      return state;
  }
};
