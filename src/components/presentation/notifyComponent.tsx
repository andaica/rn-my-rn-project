import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from "react-native-modal";

export interface Props {
  isModalVisible: boolean,
  message: string,
  closeBtn: string,
  onClose: any
}

interface State {

}

export class NotifyComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Modal isVisible={this.props.isModalVisible}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{this.props.message}</Text>
          <Button title={this.props.closeBtn} onPress={this.props.onClose} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});