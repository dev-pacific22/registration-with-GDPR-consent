import {
  ON_REGISTER_CLICK,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  user: "",
  error: "",
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_REGISTER_CLICK:
      return { ...state, isLoading: true, message: "Start" };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
        message: "Success"
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: "Something went wrong, please try again",
        message: "Fail"
      };
    default:
      return state;
  }
};
