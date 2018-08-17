/**
 * 
 * React Native App for Registration Process with GDPR consents
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducersAll  from "./src/reducers";
import { NavigationStack } from "./src/routes/Navigation";

export default class App extends Component {
  render() {
    const store = createStore(reducersAll,  applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    );
  }
}
