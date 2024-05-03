import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import AuthStack from './routes/AuthStack'
import BottomTab from './routes/TabNavigator'
import { Provider } from 'react-redux'
import { store } from './store'
// import Navigator from './routes/authStack'
import SelectTo from './screens/Home/SelectTo'
import SetFrom from './screens/Home/SetFrom'
import SetTo from './screens/Home/SetTo'
import HomeStack from './routes/HomeStack'
import InfoOrder from './screens/Home/InfoOrder'
import SearchDriver from './screens/Home/SearchDriver'
import DriverComing from './screens/Home/DriverComing'
import Complete from './screens/Home/Complete'
import SetCenter from './screens/Home/SetCenter'
import Order from './screens/Orders/Order'
import MapComponent from './components/MapComponent'
import AppRouters from './routes/AppRouters'
import TabNavigator from './routes/TabNavigator'
import Splash from './screens/Authen/Splash'
import { useEffect, useState } from 'react'

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true)
  useEffect(() => {
    setIsShowSplash(false)
  }, 1500)
  return isShowSplash ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
