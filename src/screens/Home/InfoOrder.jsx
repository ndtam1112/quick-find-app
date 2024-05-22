import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Divider, Flex, Text } from '@react-native-material/core'
import React, { useEffect, useRef, useState } from 'react'
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { ButtonComponent } from '../../components'
import { centers } from '../../datas/dataCenters'
import MapView, { LatLng, Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import MapViewDirections from 'react-native-maps-directions'

const InfoOrder = ({ navigation, route }) => {
  const setDestination = route.params._setDestination
  const setOrigin = route.params._setOrigin

  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  // const [origin, setOrigin] = useState()
  // const [destination, setDestination] = useState()
  const [location, setLocation] = useState()
  const [originNow, setOriginNow] = useState(
    setOrigin === undefined ? location : setOrigin
  )
  console.log('originNow', originNow)
  console.log('setOrigin', setOrigin)
  const [errorMsg, setErrorMsg] = useState(null)
  const [initialRegion, setInitialRegion] = useState(null)
  const [showDirections, setShowDirections] = useState(false)
  const [textFrom, setTextFrom] = useState('Vị trí hiện tại')
  const [nameCenter, setNameCenter] = useState('Cấp cứu 911 Hà Nội')
  const choicedCenter = (val1, val2) => {
    setNameCenter(val1)
    setAddressCenter(val2)
    setModalCenterVisible(!modalCenterVisible)
  }
  const [addressCenter, setAddressCenter] = useState(
    '44 P. Vũ Trọng Khánh, P. Mỗ Lao, Hà Đông, Hà Nội'
  )
  const [modalVisible, setModalVisible] = useState(false)
  const [modalCenterVisible, setModalCenterVisible] = useState(false)
  const pressHanderBack = () => {
    navigation.goBack()
  }
  const pressSelectFrom = () => {
    navigation.navigate('SelectFrom')
  }
  const pressSetTo = () => {
    navigation.navigate('SetTo')
  }
  const pressSetCenter = () => {
    navigation.navigate('SetCenter')
  }
  const pressSearchDriver = () => {
    navigation.navigate('SearchDriver', {
      origin: originNow,
      destination: setDestination,
    })
  }
  const _map = useRef(1)
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)

  const listCenters = centers.map((center) => (
    <TouchableOpacity
      key={center.id}
      onPress={() => choicedCenter(center._name, center._address)}
      style={{ width: '100%' }}
    >
      <Flex style={styles.from2}>
        <Flex
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons
            style={{ marginRight: 8 }}
            name="ambulance"
            size={24}
            color="black"
          />

          <Flex style={{ marginLeft: 16 }}>
            <Text
              onChangeText={(text) => setNameCenter(text)}
              style={{ fontWeight: 'bold', lineHeight: 24 }}
            >
              {center._name}
            </Text>
            <Text
              onChangeText={(text) => setAddressCenter(text)}
              style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}
            >
              {center._address}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </TouchableOpacity>
  ))

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setOriginNow(location.coords)
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
  let text1 = 'Waiting..'
  let text2 = 'Waiting..'
  if (errorMsg) {
    text2 = errorMsg
  } else if (location) {
    // const text1Json = JSON.stringify(title?.['name'])
    // const text1 = text1Json.replace(/"(.+)"/g, '$1')

    text1 = `${JSON.stringify(title?.['name'])}`
    text2 = `${JSON.stringify(desc?.['name'])}, ${JSON.stringify(
      desc?.['subregion']
    )}, ${JSON.stringify(desc?.['city'])}`
  }
  const edgePaddingValue = 70
  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  }
  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance)
      setDuration(args.duration)
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <Flex style={styles.container}>
        <Flex style={styles.header}>
          <TouchableOpacity onPress={pressHanderBack}>
            <Entypo name="chevron-thin-left" style={styles.iconbtn} />
          </TouchableOpacity>
          <Text style={styles.h2}>Thanh toán</Text>
          <Entypo name="chevron-thin-left" style={styles.iconbtnn} />
        </Flex>
        <MapView
          ref={_map}
          showsUserLocation
          showsMyLocationButton
          followUserLocation
          rotateEnabled={true}
          zoomEnabled={true}
          toolbarEnabled={true}
          // provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          loadingEnabled
        >
          {originNow && <Marker coordinate={originNow} />}
          {setDestination && <Marker coordinate={setDestination} />}

          {originNow && setDestination && (
            <MapViewDirections
              origin={originNow}
              destination={setDestination}
              apikey="AIzaSyAnlbziCM0NNGdRdbXhLF9V1GUVULX0L5o"
              onReady={traceRouteOnReady}
            />
          )}
        </MapView>
        <Flex style={styles.content}>
          <Flex style={styles.address}>
            <Flex style={styles.form}>
              <TouchableOpacity
                style={{ width: '100%' }}
                onPress={pressSelectFrom}
              >
                <Flex style={styles.item}>
                  <Flex
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesome5 name="map-pin" size={24} color="black" />
                    <Flex style={{ marginLeft: 16 }}>
                      <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                        {route.params.paramKey3 === undefined
                          ? 'Vị trí hiện tại'
                          : route.params.paramKey3}
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        {route.params.paramKey4}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </TouchableOpacity>
              <Divider
                style={{
                  color: 'black',
                  borderBottomWidth: 0.2,
                  width: '80%',
                  height: 1,
                }}
              />
              <TouchableOpacity style={{ width: '100%' }} onPress={pressSetTo}>
                <Flex style={styles.item}>
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
                        {/* Bệnh viện Đại học Y Hà Nội */}
                        {route.params.paramKey1}
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        {/* 1 P. Tôn Thất Tùng, Kim Liên, Đống Đa, Hà Nội */}
                        {route.params.paramKey2}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </TouchableOpacity>
            </Flex>
          </Flex>
          <Flex style={styles.address}>
            <Flex style={styles.form}>
              <TouchableOpacity
                style={{ width: '100%' }}
                onPress={() => setModalCenterVisible(!modalCenterVisible)}
              >
                <Flex style={styles.item}>
                  <Flex
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <MaterialCommunityIcons
                      name="ambulance"
                      size={24}
                      color="black"
                    />
                    <Flex style={{ marginLeft: 16 }}>
                      <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                        {nameCenter}
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        {addressCenter}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Entypo name="chevron-thin-right" style={styles.iconbtnn} />
                  </Flex>
                </Flex>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalCenterVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.')
                  setModalCenterVisible(!modalCenterVisible)
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    {listCenters}
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalCenterVisible(!modalCenterVisible)}
                    >
                      <Text style={styles.textStyle}>Đóng</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </Flex>
          </Flex>

          <TextInput
            cursorColor={'#485563'}
            selectionColor={'#29323C'}
            variant="standard"
            placeholder="Ghi chú tình trạng bệnh nhân (nếu có)"
            style={styles.txinput}
          />
          <Flex style={styles.detail_pay}>
            <Flex
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Entypo
                name="text-document-inverted"
                style={{ marginRight: 8 }}
                size={24}
                color="black"
              />
              <Text>Chi tiết thanh toán</Text>
            </Flex>
            {distance && duration ? (
              <Flex style={{ marginTop: 16 }}>
                <Flex
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}
                >
                  <Text style={styles.textdetail}>Khoảng cách</Text>
                  <Text style={styles.textdetail}>{distance.toFixed(2)} km</Text>
                </Flex>
                <Flex
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.textdetail}>Thời gian</Text>
                  <Text style={styles.textdetail}>
                    {Math.ceil(duration)} phút
                  </Text>
                </Flex>
              </Flex>
            ) : null}
            <Flex
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 16,
              }}
            >
              <Text style={styles.totaldetail}>Tổng thanh toán</Text>
              <Text
                style={{ color: '#df4040', fontWeight: 'bold', fontSize: 18 }}
              >
                đ200.000
              </Text>
            </Flex>
          </Flex>
          <ButtonComponent
            styles={{ marginTop: 16 }}
            type="primary"
            color="#00629D"
            onPress={pressSearchDriver}
            text="Đặt xe"
          />
        </Flex>
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default InfoOrder

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    position: 'relative',
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
  img: {
    width: 40,
    height: 40,
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
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
  },
  item: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
  content: {
    position: 'absolute',
    top: 100,
    left: 0,
    width: '100%',
    height: '90%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  voucher: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 8,
    padding: 16,
    marginTop: 4,
  },
  txinput: {
    width: '100%',
    height: 56,
    marginTop: 4,
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 8,
    padding: 16,
  },
  detail_pay: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 8,
    padding: 16,
    marginTop: 4,
  },
  textdetail: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
  },
  btn: {
    backgroundColor: '#00629D',
    borderRadius: 10,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
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
