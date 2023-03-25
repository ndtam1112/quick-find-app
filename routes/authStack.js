import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Splash from '../screens/Authen/Splash'
import ForeWord from '../screens/Authen/ForeWord'
import SignUp from '../screens/Authen/SignUp'
import SignUp_2 from '../screens/Authen/SignUp_2'
import ShareLocation from '../screens/Authen/ShareLocation'
import Login from '../screens/Authen/Login'
import SignUp_3 from '../screens/Authen/SignUp_3'

const screens = {
  // Splash: {
  //   screen: Splash,
  // },
  ForeWord: {
    screen: ForeWord,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp2: {
    screen: SignUp_2,
    navigationOptions: {
      headerShown: false,
    },
  },
  ShareLocation: {
    screen: ShareLocation,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp3: {
    screen: SignUp_3,
    navigationOptions: {
      headerShown: false,
    },
  },

  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
}

const AuthStack = createStackNavigator(screens)

export default createAppContainer(AuthStack)
