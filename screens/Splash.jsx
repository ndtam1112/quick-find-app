import { Flex, Text } from '@react-native-material/core'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#00629D',
  },
  img: {
    width: 100,
    height: 100,
  },
})

const splash = () => {
  return (
    <Flex style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.img} />
    </Flex>
  )
}

export default splash
