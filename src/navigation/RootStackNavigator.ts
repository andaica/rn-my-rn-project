import { createStackNavigator, createAppContainer } from 'react-navigation';


import { LoginScreen } from '../screens/Login';

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  }
},
{
  initialRouteName: 'Login',
})

const RootStackContainer = createAppContainer(RootStack);
export default RootStackContainer;