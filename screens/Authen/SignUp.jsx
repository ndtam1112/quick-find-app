import { Flex, Text, TextInput, Button } from '@react-native-material/core'
import React, { useState } from 'react'
import { Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { globalStyle } from '../../styles/global'

const styles = StyleSheet.create({
  container_2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '90%',
  },
  img: {
    width: 50,
    height: 50,
  },
  btn: {
    backgroundColor: '#00629D',
    borderRadius: 30,
    marginTop: 16,
  },
})

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const pressHander = () => {
    navigation.navigate('SignUp2')
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
      <Flex style={globalStyle.container}>
        <Flex style={styles.container_2}>
          <Entypo
            onClick={pressHanderBack}
            name="chevron-thin-left"
            style={globalStyle.iconbtn}
          />
          <Image
            source={require('../../assets/adaptive-icon.png')}
            style={styles.img}
          />
          <AntDesign name="questioncircleo" style={globalStyle.iconbtn} />
        </Flex>
        <Text style={globalStyle.h3}>
          Nhập username của bạn để đăng nhập hoặc đăng ký tài khoản
        </Text>
        <TextInput
          cursorColor={'#485563'}
          selectionColor={'#29323C'}
          variant="standard"
          placeholder="Username"
          onChangeText={(val) => setUsername(val)}
          style={globalStyle.txinput}
        />
        <Button style={styles.btn} onPress={pressHander} title="Tiếp tục" />
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default SignUp
