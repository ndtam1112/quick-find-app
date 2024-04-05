import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Authen/Splash'
import ForeWord from '../screens/Authen/ForeWord'
import SignUp from '../screens/Authen/SignUp'
import SignUp_2 from '../screens/Authen/SignUp_2'
import ShareLocation from '../screens/Authen/ShareLocation'
import Login from '../screens/Authen/Login'
import SignUp_3 from '../screens/Authen/SignUp_3'
import React from 'react'
import Setting from '../screens/Settings/Setting'
import Info from '../screens/Settings/Info'
import AuthStack from './AuthStack'

const Stack = createStackNavigator()
const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  )
}

export default SettingStack
