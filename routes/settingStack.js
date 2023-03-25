import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Splash from '../screens/Authen/Splash'
import ForeWord from '../screens/Authen/ForeWord'
import SignUp from '../screens/Authen/SignUp'
import SignUp_2 from '../screens/Authen/SignUp_2'
import ShareLocation from '../screens/Authen/ShareLocation'
import Login from '../screens/Authen/Login'
import SignUp_3 from '../screens/Authen/SignUp_3'
import Setting from '../screens/Settings/Setting'
import Info from '../screens/Settings/Info'

const screens = {
  // Splash: {
  //   screen: Splash,
  // },
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerShown: false,
    },
  },
  Info: {
    screen: Info,
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
