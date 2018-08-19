import {
  CREATE_CONSENT,
  CREATE_CONSENT_SUCCESS,
  CREATE_CONSENT_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  isError: "",
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_CONSENT:
      return { ...state, isLoading: true, isError: false };
    case CREATE_CONSENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "Success"
      };
    case CREATE_CONSENT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: "Something went wrong, please try again",
        message: "Failed"
      };
    default:
      return state;
  }
};
