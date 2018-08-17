import { ON_REGISTER_CLICK } from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_REGISTER_CLICK:
      return { ...state, message : action.payload };
    default:
      return state;
  }
};
