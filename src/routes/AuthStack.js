import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Authen/Splash'
import ForeWord from '../screens/Authen/ForeWord'
import SignUp from '../screens/Authen/SignUp'
import SignUp_2 from '../screens/Authen/SignUp_2'
import ShareLocation from '../screens/Authen/ShareLocation'
import Login from '../screens/Authen/Login'
import SignUp_3 from '../screens/Authen/SignUp_3'
import React, { useEffect, useState } from 'react'
import ForgotPassword from '../screens/Authen/ForgotPassword'
import Verification from '../screens/Authen/Verification'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthStack = () => {
  const [isExistingUser, setIsExistingUser] = useState(false)

  useEffect(() => {
    checkUserExisting()
  }, [])

  const Stack = createStackNavigator()

  const checkUserExisting = async () => {
    const res = await AsyncStorage.getItem('auth')
    res && setIsExistingUser(true)
  }
  console.log(isExistingUser)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ForeWord" component={ForeWord} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  )
}

export default AuthStack
