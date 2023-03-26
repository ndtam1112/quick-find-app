import { createStackNavigator } from '@react-navigation/stack'
import Order from '../screens/Orders/Order'
import React from 'react'

const Stack = createStackNavigator()
const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  )
}

export default OrderStack
