/**
 *
 * React Native App for Registration Process with GDPR consents
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducersAll from "./src/reducers";
import { NavigationStack } from "./src/routes/Navigation";
import firebase from "firebase";

export default class App extends Component {
  componentWillMount = () => {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCKGZlUTlne6Wz83Q_WuHlOl6D6TNFh2fA",
      authDomain: "avegenassignment.firebaseapp.com",
      databaseURL: "https://avegenassignment.firebaseio.com",
      projectId: "avegenassignment",
      storageBucket: "avegenassignment.appspot.com",
      messagingSenderId: "244021515690"
    };
    firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducersAll, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    );
  }
}
