import firebase from "firebase";
import { CREATE_CONSENT, CREATE_CONSENT_SUCCESS } from "./types";

export const addConsentAction = ({ isAccepted }, navigate) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    dispatch({ type: CREATE_CONSENT });
    firebase
      .database()
      .ref(`/consents/${currentUser.uid}`)
      .set({ isAccepted })
      .then(() => {
        dispatch({ type: CREATE_CONSENT_SUCCESS });
        navigate("Home");
      })
      .catch(error => {
        alert(error.message);
        dispatch({ type: CREATE_CONSENT_SUCCESS });
      });
  };
};
