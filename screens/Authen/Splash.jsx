import { Flex, Text } from '@react-native-material/core'
import React, { useEffect } from 'react'
import { Image, StyleSheet } from 'react-native'
import ForeWord from './ForeWord'

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
  // useEffect(() => {
  //   setTimeout(() => {
  //     return <ForeWord />
  //   }, 1000)
  // }, [])

  return (
    <Flex style={styles.container}>
      <Image source={require('../../assets/splash.png')} style={styles.img} />
    </Flex>
  )
}

export default splash
