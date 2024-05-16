import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import AuthStack from './src/routes/AuthStack'
import Splash from './src/screens/Authen/Splash'
import { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import MainNavigator from './src/routes/MainNavigator'
import { Provider } from 'react-redux'
import AppRouters from './src/routes/AppRouters'
import store from './src/redux/stores'
import 'react-native-reanimated'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={store}>
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>
    </>
  )
}
