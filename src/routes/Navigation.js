import { createStackNavigator } from "react-navigation";
import HomeScreen from "../container/HomeScreen";
import RegistrationScreen from "../container/RegistrationScreen";

export const NavigationStack = createStackNavigator(
  {
    Registration: RegistrationScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Registration",
    headerMode: "none"
  },

);
