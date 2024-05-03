import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import AuthStack from './src/routes/AuthStack'
import Splash from './src/screens/Authen/Splash'
import { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import MainNavigator from './src/routes/MainNavigator'

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true)

  const [accesToken, setAccessToken] = useState('')

  const { getItem, setItem } = useAsyncStorage('assetToken')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => {
    const token = await getItem()
    token && setAccessToken(token)
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isShowSplash ? (
        <Splash />
      ) : (
        <NavigationContainer>
          {accesToken ? <MainNavigator /> : <AuthStack />}
        </NavigationContainer>
      )}
    </>
  )
}
