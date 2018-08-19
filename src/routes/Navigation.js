import { createStackNavigator } from "react-navigation";
import HomeScreen from "../container/HomeScreen";
import RegistrationScreen from "../container/RegistrationScreen";
import ConsentScreen from "../container/ConsentScreen";

export const NavigationStack = createStackNavigator(
  {
    Registration: RegistrationScreen,
    Consent: ConsentScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Registration",
    headerMode: "none"
  },

);
