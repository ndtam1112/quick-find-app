import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import AuthStack from './routes/AuthStack'
import BottomTab from './routes/BottomTab'
// import Navigator from './routes/authStack'
import Navigator from './routes/SettingStack'
import SelectTo from './screens/Home/SelectTo'
import SetFrom from './screens/Home/SetFrom'
import SetTo from './screens/Home/SetTo'
import HomeStack from './routes/HomeStack'
import InfoOrder from './screens/Home/InfoOrder'
import SearchDriver from './screens/Home/SearchDriver'
import DriverComing from './screens/Home/DriverComing'
import Complete from './screens/Home/Complete'
import SetCenter from './screens/Home/SetCenter'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}
