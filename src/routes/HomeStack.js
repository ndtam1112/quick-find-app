import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Authen/Splash'
import ForeWord from '../screens/Authen/ForeWord'
import SignUp from '../screens/Authen/SignUp'
import SignUp_2 from '../screens/Authen/SignUp_2'
import ShareLocation from '../screens/Authen/ShareLocation'
import Login from '../screens/Authen/Login'
import SignUp_3 from '../screens/Authen/SignUp_3'
import React from 'react'
import Home from '../screens/Home/Home'
import ListFav from '../screens/Home/ListFav'
import DetailHospital from '../screens/Home/DetailHospital'
import SetTo from '../screens/Home/SetTo'
import SelectTo from '../screens/Home/SelectTo'
import SetFrom from '../screens/Home/SetFrom'
import SelectFrom from '../screens/Home/SelectFrom'
import InfoOrder from '../screens/Home/InfoOrder'
import SearchDriver from '../screens/Home/SearchDriver'
import DriverComing from '../screens/Home/DriverComing'
import Complete from '../screens/Home/Complete'
import SetCenter from '../screens/Home/SetCenter'
import SelectCenter from '../screens/Home/SelectCenter'
import ModalTo from '../screens/Home/ModalTo'
import ModalFrom from '../screens/Home/ModalFrom'
import ModalCenter from '../screens/Home/ModalCenter'

const Stack = createStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InfoOrder" component={InfoOrder} />
      <Stack.Screen name="SearchDriver" component={SearchDriver} />
      <Stack.Screen name="DriverComing" component={DriverComing} />
      <Stack.Screen name="Complete" component={Complete} />
      <Stack.Screen name="SetTo" component={SetTo} />
      <Stack.Screen name="SelectTo" component={SelectTo} />
      <Stack.Screen name="SetFrom" component={SetFrom} />
      <Stack.Screen name="ModalTo" component={ModalTo} />
      <Stack.Screen name="ModalFrom" component={ModalFrom} />
      <Stack.Screen name="ModalCenter" component={ModalCenter} />
      <Stack.Screen name="SelectFrom" component={SelectFrom} />
      <Stack.Screen name="SetCenter" component={SetCenter} />
      <Stack.Screen name="SelectCenter" component={SelectCenter} />
      <Stack.Screen name="ListFav" component={ListFav} />
      <Stack.Screen name="DetailHospital" component={DetailHospital} />
    </Stack.Navigator>
  )
}

export default HomeStack
