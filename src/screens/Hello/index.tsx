import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  navigation?: any,
}

interface State {
  enthusiasmLevel: number;
}

export class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      enthusiasmLevel: 1,
    };
  }

  onIncrement = () =>
    this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1});
  onDecrement = () =>
    this.setState({enthusiasmLevel: this.state.enthusiasmLevel - 1});
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name') || "Andaica";
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{' '}
          {name + this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 24,
  },
});