/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {View} from 'react-native';
import RootStackContainer from './navigation/RootStackNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <RootStackContainer/>
      </View>
    );
  }
}
