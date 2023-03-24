import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Splash from '../screens/Splash'

const screens = {
  Splash: {
    screen: Splash,
  },
}

const AuthStack = createStackNavigator(screens)

export default createAppContainer(AuthStack)
