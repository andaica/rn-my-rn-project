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

type Props = {};
export default class App extends Component<Props> {
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
