import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Authen/Splash'
import ForeWord from '../screens/Authen/ForeWord'
import SignUp from '../screens/Authen/SignUp'
import SignUp_2 from '../screens/Authen/SignUp_2'
import ShareLocation from '../screens/Authen/ShareLocation'
import Login from '../screens/Authen/Login'
import SignUp_3 from '../screens/Authen/SignUp_3'
import React from 'react'

const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ForeWord" component={ForeWord} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp2" component={SignUp_2} />
      <Stack.Screen name="ShareLocation" component={ShareLocation} />
    </Stack.Navigator>
  )
}

export default AuthStack
