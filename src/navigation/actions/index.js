import { NavigationActions } from "react-navigation";
import * as screenNames from "../screen_names";
import RNExitApp from "react-native-exit-app";

export const navigateBack = () => NavigationActions.back();

export const navigateToWelcome = () =>
  NavigationActions.navigate({
    routeName: screenNames.WELCOME
  });

export const navigateToSplash = () =>
  NavigationActions.navigate({
    routeName: screenNames.SPLASH
  });

export const exitApp = () => {
  RNExitApp.exitApp();
};
