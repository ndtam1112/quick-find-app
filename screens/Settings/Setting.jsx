import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Flex, Text } from '@react-native-material/core'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'

const Setting = () => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    header: {
      backgroundColor: '#00629D',
      paddingTop: 60,
      paddingBottom: 16,
      height: 200,
      display: 'flex',
      alignItems: 'center',
    },
    iconbtn: {
      fontSize: 18,
      color: '#fff',
      marginRight: 16,
    },
    h2: {
      color: '#fff',
      fontSize: 40,
      fontWeight: '600',
    },
    img: {
      width: 40,
      height: 40,
      marginBottom: 32,
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,0.1)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 16,
    },
    signout: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      marginLeft: 18,
      marginRight: 18,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.6)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: 'rgba(0,0,0,0.7)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    flist: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fff',
      marginTop: 18,
      marginLeft: 18,
      marginRight: 18,
      marginBottom: 24,
      position: 'relative',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.6)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: 'rgba(0,0,0,0.7)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    h3: {
      fontWeight: 'bold',
      color: 'rgba(0,0,0,0.7)',
      marginBottom: 16,
    },
  })
  const pressHander = (navigation) => {
    navigation.navigate('Info')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  return (
    <Flex style={styles.container}>
      <Flex style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../assets/adaptive-icon.png')}
        />
        <Text style={styles.h2}>Hi, You</Text>
      </Flex>
      <ScrollView style={styles.flist}>
        <Text style={styles.h3}>Quản lý tài khoản</Text>
        <Flex style={styles.item}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={{ fontWeight: '600', lineHeight: 32, marginLeft: -90 }}>
            Thông tin cá nhân
          </Text>
          <Entypo
            name="chevron-thin-right"
            onPress={pressHander}
            size={18}
            color="black"
          />
        </Flex>
        {/* <Flex style={styles.item}>
          <SimpleLineIcons name="location-pin" size={24} color="black" />
          <Text style={{ fontWeight: '600', lineHeight: 32, marginLeft: -170 }}>
            Địa chỉ
          </Text>
          <Entypo name="chevron-thin-right" size={18} color="black" />
        </Flex> */}
      </ScrollView>
      <Flex style={styles.signout}>
        <AntDesign
          name="logout"
          size={24}
          color="black"
          style={{ marginRight: 16 }}
        />
        <Text
          onPress={pressHander}
          style={{ fontWeight: '600', lineHeight: 32 }}
        >
          Đăng xuất
        </Text>
      </Flex>
    </Flex>
  )
}

export default Setting
