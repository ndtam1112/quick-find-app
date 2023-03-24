import {
  Flex,
  Icon,
  IconButton,
  IconComponentProvider,
  Text,
  TextInput,
} from '@react-native-material/core'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
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
    resizeMode: 'contain',
  },
  icon: {
    height: 30,
    width: 30,
    fontSize: 25,
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
    width: '80%',
    textAlign: 'center',
    letterSpacing: 0.9,
  },
  txinput: {
    width: '80%',
    color: '#111',
    borderColor: '#485563',
  },
})

const SignUp = () => {
  const [username, setUsername] = useState('')
  return (
    <Flex style={styles.container}>
      <Flex style={styles.container_2}>
        <Entypo name="chevron-thin-left" style={styles.icon} />
        <Image source={require('../assets/logo.png')} style={styles.img} />
        <AntDesign name="questioncircleo" style={styles.icon} />
      </Flex>
      <Text style={styles.h3}>
        Nhập username của bạn để đăng nhập hoặc đăng ký tài khoản
      </Text>
      <TextInput
        cursorColor={'#485563'}
        selectionColor={'#29323C'}
        borderColor={'#29323C'}
        variant="standard"
        placeholder="Username"
        onChangeText={(val) => setUsername(val)}
        style={styles.txinput}
      />
    </Flex>
  )
}

export default SignUp
