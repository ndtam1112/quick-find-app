import { createStackNavigator } from '@react-navigation/stack'
import ListChat from '../screens/Chat/ListChat'
import React from 'react'

const Stack = createStackNavigator()
const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ListChat" component={ListChat} />
    </Stack.Navigator>
  )
}
export default ChatStack
// const screens = {
//   ListChat: {
//     screen: ListChat,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
// }

// const ChatStack = createStackNavigator(screens)

// export default ChatStack
