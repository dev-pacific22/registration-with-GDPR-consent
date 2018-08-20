import firebase from "firebase";
import {
  CREATE_CONSENT,
  CREATE_CONSENT_SUCCESS,
  CREATE_CONSENT_FAIL,
  FETCH_CONSENT,
  FETCH_CONSENT_SUCCESS,
  FETCH_CONSENT_FAIL
} from "./types";

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
        navigate("Home", {user: currentUser});
      })
      .catch(error => {
        alert(error.message);
        dispatch({ type: CREATE_CONSENT_FAIL });
      });
  };
};

export const fetchConsentForUSer = navigate => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    dispatch({ type: FETCH_CONSENT });
    firebase
      .database()
      .ref(`/consents/${currentUser.uid}`)
      .on("value", snapshot => {
        dispatch({ type: FETCH_CONSENT_SUCCESS });
        if (snapshot.val()) {
          // alert(JSON.stringify(currentUser));
          navigate("Home", {user: currentUser});
        }
      });
  
  };
};
