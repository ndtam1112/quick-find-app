import { Entypo } from '@expo/vector-icons'
import { Flex, Text } from '@react-native-material/core'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  header: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#00629D',
    height: '12%',
    width: '100%',
    paddingTop: 32,
    paddingLeft: 24,
    paddingRight: 24,
  },
  iconbtn: {
    color: '#fff',
    fontSize: 20,
  },
  iconbtnn: {
    color: '#00629D',
    fontSize: 20,
  },
  h2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})
const NoOrder = () => {
  return (
    <Flex style={styles.container}>
      <Flex style={styles.header}>
        <Entypo name="chevron-thin-left" style={styles.iconbtnn} />
        <Text style={styles.h2}>Chuyến xe</Text>
        <Entypo name="chevron-thin-left" style={styles.iconbtnn} />
      </Flex>
      <Flex center style={{ height: '90%' }}>
        <Image
          style={styles.img}
          source={require('../../assets/NotFound.png')}
        />
      </Flex>
    </Flex>
  )
}

export default NoOrder
