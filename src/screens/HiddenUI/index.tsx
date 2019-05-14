import React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Spinner from 'react-native-loading-spinner-overlay';
import { commonColor } from '../../assets/styles/common';

interface Props {
  uiStore?: any,
}

interface State {

}

@inject('uiStore')
@observer
export class HiddenUI extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Spinner visible={this.props.uiStore.loading} textContent={this.props.uiStore.loadingContent} textStyle={{ color: commonColor.blue }} color={commonColor.blue} overlayColor={"rgba(0,0,0,0.5)"} />
      </View>
    )
  }
}