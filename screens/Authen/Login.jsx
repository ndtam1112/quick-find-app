import { Flex, Text, TextInput, Button } from '@react-native-material/core'
import React, { useState } from 'react'
import { Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { globalStyle } from '../../styles/global'
import { Link } from '@mui/material'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
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
  },
  btn: {
    backgroundColor: '#00629D',
    borderRadius: 30,
    marginTop: 16,
  },
})

const Login = () => {
  const [name, setName] = useState('')

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <Flex style={globalStyle.container}>
        <Flex style={styles.container_2}>
          <Entypo name="chevron-thin-left" style={globalStyle.iconbtn} />
          <Image
            source={require('../../assets/splash.png')}
            style={styles.img}
          />
          <AntDesign name="questioncircleo" style={globalStyle.iconbtn} />
        </Flex>
        <Text style={globalStyle.h3}>Welcome back {name}</Text>
        <Flex style={styles.container}>
          <Text style={globalStyle.label}>Username</Text>
          <Text>ndtam</Text>
        </Flex>
        <TextInput
          cursorColor={'#485563'}
          selectionColor={'#29323C'}
          variant="standard"
          placeholder="Password"
          onChangeText={(val) => setName(val)}
          style={globalStyle.txinput}
        />
        <Button style={styles.btn} title="Đăng nhập" />
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default Login
