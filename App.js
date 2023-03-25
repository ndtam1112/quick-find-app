import { StyleSheet, Text, View } from 'react-native'
// import Navigator from './routes/authStack'
import Navigator from './routes/settingStack'
import ListChat from './screens/Chat/ListChat'
import DetailHospital from './screens/Home/DetailHospital'
import Home from './screens/Home/Home'
import ListFav from './screens/Home/ListFav'
import Info from './screens/Settings/Info'
import Setting from './screens/Settings/Setting'

export default function App() {
  return (
    <Navigator />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
