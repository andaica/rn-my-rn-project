import { createStackNavigator, createAppContainer } from 'react-navigation';

import { LoginScreen } from '../screens/Login';
import { Hello } from '../screens/Hello';

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  }, Hello: {
    screen: Hello,
    navigationOptions: {
      title: 'Hello',
    },
  }
},
{
  initialRouteName: 'Login',
})

const RootStackContainer = createAppContainer(RootStack);
export default RootStackContainer;