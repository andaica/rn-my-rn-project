import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Hello } from './Hello';

interface Props {
  navigation?: any,
  uiStore?: any,
  sessionStore?: any;
}

interface State {

}

export class LoginScreen extends React.Component<Props, State>{
  render() {
    return (
      <Hello name="Andaica" enthusiasmLevel={10} ></Hello>
    );
  }
}