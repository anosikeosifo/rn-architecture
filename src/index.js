// @flow

import React, { Component } from "react";
import { View, TextView } from "react-native";
import { Provider } from "react-redux";
import Layout from "components/layout";
import ApplicationNavigator from "navigation/containers";
import myStore from "./myStore";

export default class MyApp extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Layout>
          <ApplicationNavigator />
        </Layout>
      </Provider>
    );
  }
}
