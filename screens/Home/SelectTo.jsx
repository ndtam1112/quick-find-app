import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React, { useState, useRef, useEffect } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import centerAround from '../../global/data.js'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'

const SelectTo = ({ navigation }) => {
  const [latlng, setLatLng] = useState({})
  const _map = useRef(1)
  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync()
    if (hasPermission.status === 'granted') {
      const permission = await askPermission()
      return permission
    }
    return true
  }
  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync()
    return permission.status === 'granted'
  }
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (!graned) return
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      setLatLng({ latitude: latitude, longitude: longitude })
    } catch (err) {}
  }
  useEffect(() => {
    checkPermission()
    getLocation()
    console.log(latlng), []
  })

  const pressSetFrom = () => {
    navigation.navigate('SetFrom')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }

  const centerAround = [
    {
      nameCenter: 'Cấp',
      numberCenter: '',
      location: 'Văn',
      latitude: 20,
      longitude: 105,
    },
    {
      nameCenter: 'Cấp cứu 911 Việt Nam',
      numberCenter: '',
      location: 'Văn Khê, Khu đô thị Văn Khê, Hà Đông, Hà Nội, Việt Nam',
      latitude: 20.977031041316064,
      longitude: 105.76277515152955,
    },
    {
      nameCenter: 'Trung tâm Cấp cứu 911 Việt Nam',
      numberCenter: '0346911911',
      location: '127 P. Đốc Ngữ, Liễu Giai, Ba Đình, Hà Nội, Việt Nam',
      latitude: 21.0427331617877,
      longitude: 105.81290026808536,
    },
    {
      nameCenter: 'Đội xe cấp cứu 911 Việt Nam',
      numberCenter: '0346911911',
      location:
        'Trung tâm Giáo dục Thường xuyên Ba Đình, TT 301, 301 P. Đội Cấn, Cống Vị, Ba Đình, Hà Nội 100000, Việt Nam',
      latitude: 21.040490152094602,
      longitude: 105.81393023623376,
    },
  ]

  centerAround.map(centerArounds)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <MapView
          ref={_map}
          showUserLoaction={true}
          followUserLocation={true}
          rotateEnabled={true}
          zoomEnabled={true}
          toolbarEnabled={true}
          provider={PROVIDER_GOOGLE}
          style={styles.bximg}
        >
          {centerArounds((item, index) => (
            <MapView.Marker coordinate={item} key={index.toString()}>
              <Image
                source={require('../../assets/ambulance.png')}
                resizeMode="cover"
              />
            </MapView.Marker>
          ))}
        </MapView>
        {/* <Flex style={styles.bximg}>
          <Image style={styles.img} source={require('../../assets/map.png')} />
        </Flex> */}
        <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        <View style={styles.from}>
          <Flex
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Entypo name="location" size={24} color="black" />
            <Flex style={{ marginLeft: 16 }}>
              <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                Tên bệnh viện
              </Text>
              <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                Địa chỉ chính xác
              </Text>
            </Flex>
          </Flex>
          <MaterialIcons name="favorite" size={20} color="black" />
        </View>

        <TouchableOpacity onPress={pressSetFrom}>
          <View style={styles.btn}>
            <Entypo name="direction" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SelectTo

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  iconbtn: {
    position: 'absolute',
    bottom: 640,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
  bximg: {
    width: '100%',
    height: '100%',
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  from: {
    width: '80%',
    position: 'absolute',
    bottom: 120,
    left: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 10,
    padding: 16,
  },
  btn: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#00629D',
    borderRadius: 10,
  },
  txinput: {
    width: '55%',
    height: 56,
    position: 'absolute',
    left: 32,
    bottom: 64,
    padding: 16,

    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    backgroundColor: 'rgba(0,0,0,0.1)',
  },
})
