import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, authSelector } from '../redux/reducers/authReducer'
import AuthStack from './AuthStack'
import MainNavigator from './MainNavigator'
import Splash from '../screens/Authen/Splash'

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true)

  const { getItem } = useAsyncStorage('auth')

  const auth = useSelector(authSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    checkLogin()
    const timeout = setTimeout(() => {
      setIsShowSplash(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  const checkLogin = async () => {
    const res = await getItem()

    res && dispatch(addAuth(JSON.parse(res)))
  }

  return (
    <>
      {isShowSplash ? (
        <Splash />
      ) : auth.accesstoken ? (
        <MainNavigator />
      ) : (
        <AuthStack />
      )}
    </>
  )
}

export default AppRouters
