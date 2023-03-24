import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ForeWord from './screens/ForeWord'
import SignUp from './screens/SignUp'
import Splash from './screens/Splash'

export default function App() {
  return (
    <SignUp />
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
