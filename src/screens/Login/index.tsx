import React from 'react';
import {
  StyleSheet, Text, View, Image,
  TextInput, TouchableOpacity, ScrollView,
  KeyboardAvoidingView, Alert
} from 'react-native';
import I18n from '../../utils/i18n';
import { inject, observer } from 'mobx-react';
import { Container, Content, Icon, Label, Right, Button,Footer} from "native-base";
import styles from "./styles";
const topBg = require("../../assets/common/img_logo_01.png");
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  navigation?: any,
  shopStore?: any,
  memberStore?: any;
  loginForm?: any;
	onLogin?: Function;
}

interface State {}

@observer
class LoginScreen extends React.Component<Props, State>{
  

  render() {
    return (
      <Container style={ styles.container}>
			 <ScrollView>
				<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#35b3cc', '#619de7']} style={styles.linearGradient}>
					<View style={{ width: 300 }}>
						<Image
							source={topBg}
							style={styles.imageHeader}
						/>
					</View>
					<Right>
						<View style={{ flexDirection: "row",marginRight: -10 }}>
							<Button block style={styles.buttoninfo} bordered info onPress={() => { }}>
								<View style={{ flexDirection: "row" }}>
									<Label style={{ color: '#ffff',fontSize:10 }}>問合せフォーム</Label>
								</View>
							</Button>
							<Button block style={styles.buttoninfo} bordered info onPress={() => { }}>
								<View style={{ flexDirection: "row" }}>
									<Label style={{ color: '#ffff',fontSize:10 }}>問合せフォーム</Label>
								</View>
							</Button>
						</View>
					</Right>

				</LinearGradient>
				
				<View style={styles.body}>
					<View>
						<View style={{ flexDirection: "row" }}>
						<Icon name="lock-open" type='SimpleLineIcons' style={styles.icon}></Icon>
						<Text style={styles.textheader} > ユーザーログイン</Text>
						</View>
						<Label style={styles.text}>「面接・面談・録画面接」か「マイページ」を選択し、ログイン情報を入力しましょう。</Label>
					</View>
				</View>
				<Content >
					{this.props.loginForm}
				</Content>
				</ScrollView>
				
			</Container>
    );
  }
}
export default LoginScreen;