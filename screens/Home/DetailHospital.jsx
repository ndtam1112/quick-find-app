import { Button, Flex, Text } from '@react-native-material/core'
import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#00629D',
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
  },

  info: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 60,
    position: 'relative',
    height: 400,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'rgba(0,0,0,0.3)',
  },
  sub_info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 4,
    color: 'rgba(0,0,0,0.8)',
  },
  btn: {
    backgroundColor: '#00629D',
    borderRadius: 30,
    position: 'absolute',
    bottom: 92,
    left: 40,
    right: 40,
  },
  sub_text: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 14,
    marginRight: 4,
  },
  iconbtn: {
    fontSize: 24,
    position: 'absolute',
    top: 70,
    left: 20,
  },
})
const DetailHospital = ({ navigation }) => {
  const pressSetFrom = () => {
    navigation.navigate('SetFrom')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  return (
    <ScrollView style={{ width: '100%' }}>
      <Flex style={styles.container}>
        <Image
          styles={styles.img}
          source={require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png')}
        />
        <Flex style={styles.info}>
          <Text style={styles.h1}>Bệnh viện Hồng Ngọc</Text>
          <Flex style={styles.sub_info}>
            <Flex style={styles.sub_info}>
              <Text style={styles.sub_text}>Chứng nhận BCT</Text>
              <Ionicons
                name="checkmark-done-circle-sharp"
                size={16}
                color="green"
              />
            </Flex>
            <MaterialIcons name="favorite" size={24} color="black" />
          </Flex>
          <Text style={styles.text}>Địa chỉ</Text>
          <Text style={styles.text}>Số điện thoại</Text>
          <Text style={styles.text}>Hotline</Text>
          <Text style={styles.text}>Cấp cứu</Text>
        </Flex>
        <Button
          onPress={pressSetFrom}
          style={styles.btn}
          title="Di chuyển đến đây"
        />
        <TouchableOpacity
          style={{ position: 'absolute', top: 0, left: 0 }}
          onPress={pressHanderBack}
        >
          <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        </TouchableOpacity>
      </Flex>
    </ScrollView>
  )
}

export default DetailHospital
