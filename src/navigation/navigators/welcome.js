import { TabNavigator } from "react-navigation";
import * as screenNames from "../screen_names";
import Settings from "features/settings/containers";
import { UserProfile } from "features/user_profile/containers";

export default TabNavigator(
  {
    [screenNames.SETTINGS]: {
      screen: Settings
    },

    [screenNames.WELCOME]: {
      screen: UserProfile
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      swipeEnabled: false,
      activeTintColor: "#ff5a5f",
      inactiveTintColor: "#555",
      style: {
        backgroundColor: "#fff",
        paddingVertical: 7
      },
      labelStyle: {
        fontSize: 9
      }
    }
  }
);
