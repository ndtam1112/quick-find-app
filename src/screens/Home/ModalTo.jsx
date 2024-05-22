import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React, { useState, useRef, useEffect } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import centerAround from '../../global/data.js'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps'
import * as Location from 'expo-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { string } from 'prop-types'

const ModalTo = ({ navigation }) => {
  const _map = useRef(1)
  const [status, setStatus] = useState('1')
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [currentLocation, setCurrentLocation] = useState(null)
  const [initialRegion, setInitialRegion] = useState(null)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
  })

  // const [pin, setPin] = useState({
  //   latitude: currentLocation.latitude,
  //   longitude: currentLocation.longitude,
  // })

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
  const handleMarkerDragEnd = async (e) => {
    setMarkerPosition(e.nativeEvent.coordinate)
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      })
      setTitle(address[0])
      setDesc(address[0])
      console.log('Address:', address)
    } catch (error) {
      console.error('Error fetching address:', error)
    }
  }

  // const geocode = async () => {
  //   const geocodedLocation = await Location.geocodeAsync(title)
  //   console.log('Geocode:')
  //   console.log(geocodedLocation)
  // }

  let text1 = 'Waiting..'
  let text2 = 'Waiting..'
  if (errorMsg) {
    text2 = errorMsg
  } else if (location) {
    text1 = `${JSON.stringify(title?.['name'])}`
    text2 =
      status != 1
        ? `${JSON.stringify(desc?.['formatted_address'])}`
        : `${JSON.stringify(desc?.['streetNumber'])}, ${JSON.stringify(
            desc?.['street']
          )}, ${JSON.stringify(desc?.['district'])}`
  }

  onRegionChange = (region) => {
    this.setState({ region })
  }

  const pressInfoOrder = () => {
    navigation.navigate('InfoOrder', { paramKey1: text1, paramKey2: text2 })
  }

  const pressHanderBack = () => {
    navigation.goBack()
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        {/* Lấy vị trí hiện tại: https://medium.com/@Sarmilasivaraja/integrating-real-time-map-with-user-location-in-a-react-native-app-d0bef63ba3b2 */}
        {initialRegion && (
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
        )}
        <GooglePlacesAutocomplete
          // leading={(props) => <EvilIcons name="search" size={24} color="black" />}
          // cursorColor={'#485563'}
          // selectionColor={'#29323C'}
          placeholder="Search"
          //enableHighAccuracyLocation
          onPress={(data, details = null) => {
            //setdestinationPlace({ data, details })
            setStatus('2')
            setTitle(details)
            setDesc(details)
            console.log(data, details)
            console.log(data.structured_formatting.main_text)
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAnlbziCM0NNGdRdbXhLF9V1GUVULX0L5o',
            language: 'vi',
          }}
          onFail={(error) => console.log(error)}
        />
        <Entypo
          onPress={pressHanderBack}
          name="chevron-thin-left"
          style={styles.iconbtn}
        />

        <View style={styles.from}>
          <Flex
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome5 name="map-pin" size={24} color="black" />
            <Flex style={{ marginLeft: 16, width: 240 }}>
              <Text
                style={{ fontWeight: 'bold', lineHeight: 24, fontSize: 14 }}
                onChangeText={setTitle}
              >
                {text1}
              </Text>
              <Text
                style={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}
                onChangeText={setDesc}
              >
                {text2}
              </Text>
            </Flex>
          </Flex>
          <MaterialIcons name="favorite" size={20} color="black" />
        </View>

        <TouchableOpacity onPress={pressInfoOrder}>
          <View style={styles.btn}>
            <Entypo name="direction" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ModalTo

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    // display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },
  iconbtn: {
    position: 'absolute',
    bottom: 760,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
  bximg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: '100%',
    // height: '100%',
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
    left: 40,
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
    right: 45,
    bottom: 0,
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
    // position: 'absolute',
    // left: 32,
    // bottom: 350,
    padding: 16,
    margin: 14,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
})
