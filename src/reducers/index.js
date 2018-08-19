import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationReducer";
import ConsentReducers from "./ConsentReducers";

export default combineReducers({
  registration: RegistrationReducer,
  consents: ConsentReducers
});
