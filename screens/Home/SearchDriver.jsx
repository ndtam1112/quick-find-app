import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  iconbtn: {
    position: 'absolute',
    bottom: 640,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
  bximg: {
    width: '100%',
    height: '100%',
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  from: {
    width: '80%',
    position: 'absolute',
    bottom: 150,
    left: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 10,
    padding: 16,
  },
  btn: {
    position: 'absolute',
    right: 24,
    bottom: 64,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#00629D',
    borderRadius: 10,
  },
  txinput: {
    width: '55%',
    height: 56,
    position: 'absolute',
    left: 32,
    bottom: 64,
    padding: 16,

    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  btn_load: {
    backgroundColor: 'transparent',
  },
})

const SearchDriver = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const pressInforOrder = () => {
    navigation.navigate('InfoOrder')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <Flex style={styles.container}>
        <Flex style={styles.bximg}>
          <Image style={styles.img} source={require('../../assets/map.png')} />
        </Flex>
        <TouchableOpacity onPress={pressHanderBack}>
          <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        </TouchableOpacity>
        <Flex
          style={{
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 24,
            }}
          >
            Đang tìm tài xế
          </Text>
          <Button
            style={styles.btn_load}
            disabled
            title="Button"
            loading={loading}
            loadingIndicatorPosition="overlay"
          />
        </Flex>
        <Flex
          center
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 100,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons name="cancel" size={40} color="black" />
          <Text style={{ color: 'red', marginTop: 4 }}>Hủy bỏ</Text>
        </Flex>
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default SearchDriver
