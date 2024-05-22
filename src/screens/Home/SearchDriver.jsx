import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React, { useEffect, useRef, useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonComponent } from '../../components'
import { LoadingModal } from '../../modals'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const SearchDriver = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const _map = useRef(1)
  const [status, setStatus] = useState('1')
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [currentLocation, setCurrentLocation] = useState(null)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [initialRegion, setInitialRegion] = useState(null)
  const pressDriverComing = () => {
    navigation.navigate('DriverComing')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  const moveTo = route.params.destination
  const moveFrom = route.params.origin
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setCurrentLocation(location)
      setLocation(location)
      console.log('LocationCoord:')
      console.log(location)

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })

      let reverseGeocodeAddress = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      })
      setTitle(reverseGeocodeAddress[0])
      setDesc(reverseGeocodeAddress[0])
      console.log('Reverse:')
      console.log(reverseGeocodeAddress)
    }

    getLocation()
  }, [])

  // useEffect(() => {
  //   const edgePaddingValue = 70
  //   const edgePadding = {
  //     top: edgePaddingValue,
  //     right: edgePaddingValue,
  //     bottom: edgePaddingValue,
  //     left: edgePaddingValue,
  //   }
  //   const traceRouteOnReady = () => {
  //     if (moveFrom && moveTo) {
  //       _map.current?.fitCoordinates([moveFrom, moveTo], { edgePadding })
  //     }
  //   }
  //   traceRouteOnReady()
  // }, [])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={pressHanderBack}>
          <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        </TouchableOpacity>

        <MapView
          ref={_map}
          showsUserLocation
          showsMyLocationButton
          followUserLocation
          rotateEnabled={true}
          zoomEnabled={true}
          toolbarEnabled={true}
          // provider={PROVIDER_GOOGLE}
          style={styles.bximg}
          initialRegion={initialRegion}
          loadingEnabled
        >
          {route.params.origin && <Marker coordinate={route.params.origin} />}
          {route.params.destination && (
            <Marker coordinate={route.params.destination} />
          )}
          {/* <MapViewDirections
            origin={origin}
            destination={destination}
            apikey="AIzaSyAnlbziCM0NNGdRdbXhLF9V1GUVULX0L5o"
          /> */}
          {moveFrom && moveTo && (
            <MapViewDirections
              origin={moveFrom}
              destination={moveTo}
              apikey="AIzaSyAnlbziCM0NNGdRdbXhLF9V1GUVULX0L5o"
            />
          )}
        </MapView>
        {/* <Flex
          style={{
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 24,
            }}
          >
            Đang tìm tài xế
          </Text>
        </Flex> */}
        {/* <Flex
          center
          style={{
            position: 'absolute',
            top: 450,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons name="cancel" size={40} color="black" />
            <Text style={{ color: 'red', marginTop: 4 }}>Hủy bỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressDriverComing}>
            <Entypo
              name="chevron-thin-right"
              style={{ fontSize: 24, marginLeft: 16 }}
            />
          </TouchableOpacity>
        </Flex> */}
        {/* <Modal
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
              <Text style={{ textAlign: 'center', marginBottom: 16 }}>
                Bạn chắn chắn muốn hủy chuyến xe?
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
        </Modal> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchDriver

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconbtn: {
    position: 'absolute',
    bottom: 640,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
  iconbtnn: {
    position: 'absolute',
    bottom: 640,
    right: 24,
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
    bottom: 150,
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
    bottom: 64,
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
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  btn_load: {
    backgroundColor: 'transparent',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
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
  from2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginBottom: 16,
    paddingBottom: 16,
  },
})
