import firebase from "firebase";
import {
  ON_REGISTER_CLICK,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from "./types";

export const onRegisterClickAction = ({ name, email, password }) => {
  return dispatch => {
    dispatch({ type: ON_REGISTER_CLICK });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFail(dispatch, error));
      });
  };
};
const loginUserFail = (dispatch, error) => {
  alert(JSON.stringify(error));
  dispatch({ type: REGISTER_USER_FAIL, payload: error });
};

const loginUserSuccess = (dispatch, user) => {
  alert(JSON.stringify(user));
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
};
