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
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#00629D',
  },
  img: {
    width: '100%',
    height: '70%',
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
})

const ForeWord = ({ navigation }) => {
  const pressHander = () => {
    navigation.navigate('SignUp')
  }
  return (
    <Flex style={styles.container}>
      <Image source={require('../../assets/fore-1.png')} style={styles.img} />
      <Flex style={styles.container_2}>
        <Text style={styles.h3}>QuickFind gửi lời chào đến bạn</Text>
        <Text style={styles.text}>
          QuickFind là ứng dụng tra cứu bệnh viện chất lượng và cung cấp dịch vụ
          cứu thương xung quanh bạn
        </Text>
        <Button
          style={styles.btn}
          onPress={pressHander}
          title="Tiếp tục"
        ></Button>
      </Flex>
    </Flex>
  )
}

export default ForeWord
