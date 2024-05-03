import { Entypo } from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { globalStyle } from '../../styles/global'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#00629D',
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  container_2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '30%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 24,
  },
  container_3: {
    position: 'relative',
    height: '70%',
    width: '100%',
    paddingTop: 24,
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
  },
  text: {
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  btn: {
    backgroundColor: '#00629D',
    borderRadius: 30,
  },
  iconbtn: {
    height: 30,
    width: 30,
    fontSize: 25,
    left: 24,
    top: 30,
  },
})

const ShareLocation = () => {
  return (
    <Flex style={styles.container}>
      <Flex style={styles.container_3}>
        <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        <Image
          source={require('../../assets/share_location.png')}
          style={styles.img}
        />
      </Flex>
      <Flex style={styles.container_2}>
        <Text style={styles.h3}>Chia sẻ vị trí</Text>
        <Text style={styles.text}>
          Nhờ việc chia sẻ vị trí của bạn, chúng tôi sẽ gợi ý những bệnh viện và
          dịch vụ cứu thương chất lượng gần bạn nhất
        </Text>
        <Button style={styles.btn} title="Chia sẻ vị trí"></Button>
      </Flex>
    </Flex>
  )
}

export default ShareLocation
