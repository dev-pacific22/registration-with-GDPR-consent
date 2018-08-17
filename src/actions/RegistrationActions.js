import { ON_REGISTER_CLICK } from "./types";

export const onRegisterClickAction = message => {
  return {
    type: ON_REGISTER_CLICK,
    payload: message
  };
};
