import { Button, Flex, Text } from '@react-native-material/core'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Image } from 'react-native'
import { globalStyle } from '../../styles/global'
import Swiper from 'react-native-swiper'
import { appColors } from '../../constants/appColors'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
})

const ForeWord = ({ navigation }: any) => {
  const [index, setIndex] = useState(0)
  const pressHanderLogin = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Swiper
        style={{}}
        loop={false}
        onIndexChanged={(num) => setIndex(num)}
        index={index}
        activeDotColor={'#00629D'}
      >
        <View>
          <Image
            source={require('../../assets/fore-1.png')}
            style={styles.img}
          />
          <View style={styles.container_2}>
            <Text style={styles.h3}>QuickFind gửi lời chào đến bạn</Text>
            <Text style={styles.text}>
              QuickFind là ứng dụng tra cứu bệnh viện chất lượng và cung cấp
              dịch vụ cứu thương xung quanh bạn
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/fore-2.png')}
            style={styles.img}
          />
          <View style={styles.container_2}>
            <Text style={styles.h3}>QuickFind gửi lời chào đến bạn</Text>
            <Text style={styles.text}>
              QuickFind là ứng dụng tra cứu bệnh viện chất lượng và cung cấp
              dịch vụ cứu thương xung quanh bạn
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/fore-3.png')}
            style={styles.img}
          />
          <View style={styles.container_2}>
            <Text style={styles.h3}>QuickFind gửi lời chào đến bạn</Text>
            <Text style={styles.text}>
              QuickFind là ứng dụng tra cứu bệnh viện chất lượng và cung cấp
              dịch vụ cứu thương xung quanh bạn
            </Text>
          </View>
        </View>
      </Swiper>
      <View
        style={{
          paddingHorizontal: 32,
          paddingVertical: 32,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={pressHanderLogin}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('Login')
          }
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForeWord
