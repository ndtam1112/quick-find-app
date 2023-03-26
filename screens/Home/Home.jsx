import { Flex, Text, TextInput } from '@react-native-material/core'
import React from 'react'
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { globalStyle } from '../../styles/global'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00629D',
    paddingTop: 50,
    height: '25%',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  main_header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    marginLeft: 8,
  },
  imgbtn: {
    width: 40,
    height: 40,
  },
  text: {
    color: '#fff',
  },
  txinput: {
    color: '#111',
    borderBottomColor: '#485563',
    marginTop: 16,
    borderColor: '#fff',
  },
  content: {
    display: 'flex',
    width: '100%',
    paddingLeft: 24,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    width: '80%',
    letterSpacing: 0.9,
  },
  btnimg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: '50%',
  },
})

const Home = ({ navigation }) => {
  const pressBookCar = () => {
    navigation.navigate('SetTo')
  }
  const pressListFav = () => {
    navigation.navigate('ListFav')
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <Flex style={styles.container}>
        <Flex style={styles.header}>
          <Flex style={styles.main_header}>
            <Text style={styles.text}>Hi, You</Text>
            <Flex
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -36,
              }}
            >
              <Image
                source={require('../../assets/adaptive-icon.png')}
                style={styles.img}
              />
            </Flex>
            <TouchableOpacity onPress={pressListFav}>
              <MaterialIcons name="favorite" size={24} color="black" />
            </TouchableOpacity>
          </Flex>
          <TextInput
            cursorColor={'#485563'}
            selectionColor={'#29323C'}
            placeholder="Tìm kiếm bệnh viện"
            style={styles.txinput}
            leading={(props) => (
              <EvilIcons name="search" size={24} color="black" />
            )}
          />
        </Flex>
        <Flex style={styles.content}>
          <Text style={styles.h2}>Dịch vụ</Text>
          <TouchableOpacity onPress={pressBookCar}>
            <Flex>
              <Flex style={styles.btnimg}>
                <Image
                  source={require('../../assets/ambulance.png')}
                  style={styles.imgbtn}
                />
              </Flex>
              <Text style={{ marginTop: 4 }}>Đặt xe</Text>
            </Flex>
          </TouchableOpacity>
        </Flex>
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default Home
