import React from "react";
import { StackNavigator } from "react-navigation";
import WelcomeNavigator from "./welcome";
import * as screenNames from "../screen_names";
import Splash from "features/splash/containers";

const appNavigator = StackNavigator({
  [screenNames.SPLASH]: {
    screen: Splash
  },

  [screenNames.WELCOME]: {
    screen: WelcomeNavigator
  }
});

export default appNavigator;
