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
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps'
import * as Location from 'expo-location'

const SelectTo = ({ navigation }) => {
  const _map = useRef(1)

  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()

  // Function to handle marker press
  const handleMarkerPress = (markerTitle, markerDesc) => {
    setTitle(markerTitle)
    setDesc(markerDesc)
  }

  const [currentLocation, setCurrentLocation] = useState(null)
  const [initialRegion, setInitialRegion] = useState(null)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setCurrentLocation(location.coords)
      setLocation(location)
      console.log('LocationCoord:')
      console.log(location)

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })
    }

    getLocation()
  }, [])

  const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(title)
    console.log('Geocode:')
    console.log(geocodedLocation)
  }

  const reverseGeocode = async () => {
    const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    })
    setTitle(reverseGeocodeAddress[0])
    setDesc(reverseGeocodeAddress[0])
    console.log('Reverse:')
    console.log(reverseGeocodeAddress)
  }

  let text2 = 'Waiting..'
  if (errorMsg) {
    text2 = errorMsg
  } else if (location) {
    text2 = `${JSON.stringify(desc?.['name'])}, ${JSON.stringify(
      desc?.['subregion']
    )}, ${JSON.stringify(desc?.['region'])}`
  }

  onRegionChange = (region) => {
    this.setState({ region })
  }

  const pressSetFrom = () => {
    navigation.navigate('SetFrom')
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
            showUserLocation={true}
            followUserLocation={true}
            rotateEnabled={true}
            zoomEnabled={true}
            toolbarEnabled={true}
            provider={PROVIDER_GOOGLE}
            style={styles.bximg}
            initialRegion={initialRegion}
            loadingEnabled
          >
            {currentLocation && (
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                draggable
              />
            )}
          </MapView>
        )}

        <Entypo
          onPress={pressHanderBack}
          name="chevron-thin-left"
          style={styles.iconbtn}
        />
        <Button onPress={reverseGeocode} />
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
              <TextInput
                style={{ fontWeight: 'bold', lineHeight: 24 }}
                placeholder="Điểm đến"
                onChangeText={setTitle}
              ></TextInput>
              <TextInput
                style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}
                placeholder="Địa chỉ chính xác"
                onChangeText={setDesc}
              >
                {text2}
              </TextInput>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    left: 80,
    top: 320,
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
