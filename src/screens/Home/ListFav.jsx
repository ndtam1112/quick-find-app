import React, { useState } from 'react'
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Flex, Text } from '@react-native-material/core'
import { AntDesign } from '@expo/vector-icons'

const ListFav = ({ navigation }) => {
  const pressDetail = () => {
    navigation.navigate('DetailHospital')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  const listfavs = [
    {
      id: 1,
      thumb: require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png'),
      name: 'Bệnh viện Hồng Ngọc',
      address: 'Địa chỉ',
    },
    {
      id: 2,
      thumb: require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png'),
      name: 'Bệnh viện Hồng Ngọc',
      address: 'Địa chỉ',
    },
    {
      id: 3,
      thumb: require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png'),
      name: 'Bệnh viện Hồng Ngọc',
      address: 'Địa chỉ',
    },
    {
      id: 4,
      thumb: require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png'),
      name: 'Bệnh viện Hồng Ngọc',
      address: 'Địa chỉ',
    },
    {
      id: 5,
      thumb: require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png'),
      name: 'Bệnh viện Hồng Ngọc',
      address: 'Địa chỉ',
    },
    {
      id: 6,
      thumb: require('../../assets/tham-my-benh-vien-hong-ngoc-suad.png'),
      name: 'Bệnh viện Hồng Ngọc',
      address: 'Địa chỉ',
    },
  ]
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    header: {
      backgroundColor: '#00629D',
      paddingTop: 60,
      paddingLeft: 24,
      paddingBottom: 16,
      height: 100,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    iconbtn: {
      fontSize: 18,
      color: '#fff',
      marginRight: 16,
    },
    h2: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
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
    flist: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fff',
      marginTop: 18,
      marginLeft: 18,
      marginRight: 18,
      marginBottom: 60,
      position: 'relative',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.6)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: 'rgba(0,0,0,0.7)',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#00629D',
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    thumbContainer: {
      width: 70,
      height: 70,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumb: {
      width: 70,
      height: 70,
      resizeMode: 'cover',
      borderRadius: 50,
    },
  })
  const [modalVisible, setModalVisible] = useState(false)
  const oneFav = ({ item }) => (
    <TouchableOpacity onPress={pressDetail}>
      <Flex style={styles.item}>
        <View style={styles.thumbContainer}>
          <Image style={styles.thumb} source={item.thumb} />
        </View>
        <Flex>
          <Text style={{ fontWeight: '600', lineHeight: 32 }}>{item.name}</Text>
          <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
            {item.address}
          </Text>
        </Flex>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Bạn muốn xóa bệnh viện khỏi danh sách?
              </Text>
              <Flex
                style={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Đồng ý</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hủy</Text>
                </Pressable>
              </Flex>
            </View>
          </View>
        </Modal>
        <AntDesign
          onPress={() => setModalVisible(!modalVisible)}
          name="delete"
          size={18}
          color="black"
        />
      </Flex>
    </TouchableOpacity>
  )

  return (
    <Flex style={styles.container}>
      <Flex style={styles.header}>
        <TouchableOpacity onPress={pressHanderBack}>
          <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        </TouchableOpacity>
        <Text style={styles.h2}>Danh sách bệnh viện đã lưu</Text>
      </Flex>
      <FlatList
        style={styles.flist}
        data={listfavs}
        renderItem={oneFav}
      ></FlatList>
    </Flex>
  )
}

export default ListFav
