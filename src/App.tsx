/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import RootStackContainer from './navigation/RootStackNavigator';
import { Provider, inject } from "mobx-react";
import stores from "./stores";
import { HiddenUI } from './screens/HiddenUI';

import CodePush from "react-native-code-push";

type Props = {};
class MyApp extends Component<Props> {
  componentWillMount() {
    CodePush.sync({ updateDialog: { title: "An update is available!" } });
  }
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          <HiddenUI />
          <RootStackContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, installMode: CodePush.InstallMode.ON_NEXT_RESUME };
const App = CodePush(codePushOptions)(MyApp);

export default App;
