import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login/LoginContainer';
import { Hello } from '../screens/Hello';

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
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