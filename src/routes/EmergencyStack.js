import { createStackNavigator } from '@react-navigation/stack'
import Emergency from '../screens/Emergency/Emergency'
import React from 'react'

const Stack = createStackNavigator()
const EmergencyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Emergency" component={Emergency} />
    </Stack.Navigator>
  )
}

export default EmergencyStack
