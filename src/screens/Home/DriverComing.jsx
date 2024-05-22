import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const DriverComing = ({ navigation }) => {
  const _map = useRef(1)
  const [status, setStatus] = useState('1')
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [currentLocation, setCurrentLocation] = useState(null)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [initialRegion, setInitialRegion] = useState(null)

  const [modalVisible, setModalVisible] = useState(false)
  const pressComplete = () => {
    navigation.navigate('Complete')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
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
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={pressHanderBack}>
          <Entypo name="chevron-thin-left" style={styles.iconbtnn} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            lineHeight: 24,
          }}
        >
          Tài xế đang đến
        </Text>
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
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
              }}
              draggable
              // onDragEnd={handleMarkerDragEnd}
              onDragEnd={handleMarkerDragEnd}
            />
          )}
        </MapView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DriverComing

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconbtn: {
    position: 'absolute',
    bottom: 680,
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
  iconbtn: {
    borderWidth: 1,
    borderColor: '#111',
    padding: 10,
    borderRadius: 20,
  },
  iconbtnn: {
    position: 'absolute',
    bottom: 640,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
})
