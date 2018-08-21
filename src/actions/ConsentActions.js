import firebase from "firebase";
import {
  CREATE_CONSENT,
  CREATE_CONSENT_SUCCESS,
  CREATE_CONSENT_FAIL,
  FETCH_CONSENT,
  FETCH_CONSENT_SUCCESS,
  FETCH_CONSENT_FAIL
} from "./types";
import { StackActions, NavigationActions } from "react-navigation";

/**
 * Action to setting a consent for the user.
 * @param {boolean} isAccepted flag to set in database.
 * @param {navigation} navigation navigate to the next screen.
 */
export const addConsentAction = ({ isAccepted }, navigation) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    dispatch({ type: CREATE_CONSENT });
    firebase
      .database()
      .ref(`/consents/${currentUser.uid}`)
      .set({ isAccepted })
      .then(() => {
        dispatch({ type: CREATE_CONSENT_SUCCESS });
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })]
        });
        navigation.dispatch(resetAction);
      })

      .catch(error => {
        alert(error.message);
        dispatch({ type: CREATE_CONSENT_FAIL });
      });
  };
};
/**
 * Check whether the consent is set for the current user or not.
 * if set then navigate to home else keep on the same screen.
 * @param {navigation} navigation
 */
export const fetchConsentForUSer = navigation => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    dispatch({ type: FETCH_CONSENT });
    firebase
      .database()
      .ref(`/consents/${currentUser.uid}`)
      .on("value", snapshot => {
        dispatch({ type: FETCH_CONSENT_SUCCESS });
        if (snapshot.val()) {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Home" })]
          });
          navigation.dispatch(resetAction);
        }
      });
  };
};
