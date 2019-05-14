import React from 'react';
import {
  StyleSheet, Text, View, Image,
  TextInput, TouchableOpacity, ScrollView,
  KeyboardAvoidingView, Alert
} from 'react-native';
import I18n from '../../utils/i18n';
import { inject, observer } from 'mobx-react';

interface Props {
  navigation?: any,
  uiStore?: any,
  memberStore?: any;
}

interface State {
  email: string,
  password: string,
}

@inject('memberStore')
@inject('uiStore')
@observer
export class LoginScreen extends React.Component<Props, State>{
  
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",// user has not logged in yet
      password: "",
    };
  }

  async login() {
    const { navigate } = this.props.navigation;
    console.log('Click Login : email: ' + this.state.email + ", pass: " + this.state.password);
    this.props.uiStore.showLoadingScreen();
    let result = await this.props.memberStore.login(this.state.email, this.state.password);
    console.log("Login result: ", result);
    this.props.uiStore.hideLoadingScreen();
    this.props.uiStore.showNotify("Login success!", "OK", () => {console.log("Close notify!")})
    navigate('Hello', { name: this.props.memberStore.user.name });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.welcome}>{I18n.t("LOGIN.welcome")}</Text>

          <View style={styles.formLogin}>
            <TextInput
              style={[styles.email, styles.formInput]}
              placeholder="Email"
              onChangeText={(text) => this.setState({ email: text })}
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.password, styles.formInput]}
              placeholder={I18n.t("LOGIN.password")}
              onChangeText={(text) => this.setState({ password: text })}
              secureTextEntry={true}
            />

            <Text style={styles.passForgotLink}>{I18n.t("LOGIN.forgotPassword")}</Text>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={this.login.bind(this)}
            >
              <Text style={styles.loginText}> {I18n.t("LOGIN.signin")} </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLink}>{I18n.t("LOGIN.notHaveAccount")}</Text>
          <Text style={[styles.footerLink, { color: 'red' }]}>{I18n.t("LOGIN.createAccount")}</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120
  },
  logo: {
    width: 212,
    height: 90
  },
  mainContainer: {
    flex: 2
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#5B5A5A',
    letterSpacing: 5
  },
  formLogin: {
    padding: 40,
    paddingTop: 20
  },
  formInput: {
    textAlign: 'left',
    padding: 10,
    height: 50,
    color: '#5B5A5A',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#CFD0D1'
  },
  email: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  password: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  passForgotLink: {
    textAlign: 'right',
    marginTop: 10,
    color: '#5B5A5A',
    fontSize: 14,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#129793',
    height: 50,
    borderRadius: 25,
    padding: 15,
    marginTop: 30
  },
  loginText: {
    color: 'white'
  },
  footer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20
  },
  footerLink: {
    textAlign: 'center'
  }
});