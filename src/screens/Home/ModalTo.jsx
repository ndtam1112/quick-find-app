import { SearchNormal1 } from 'iconsax-react-native'
import React, { useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { ButtonComponent, InputComponent, RowComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Flex, Text } from '@react-native-material/core'
import { Entypo, MaterialIcons } from '@expo/vector-icons'

const ModalTo = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [locations, setLocations] = useState([])
  const [addressSelected, setAddressSelected] = useState('')

  const handleClose = () => {
    navigation.goBack()
  }

  const _map = useRef(null)
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
  const initial_lat = 28.46254
  const initial_lng = -81.397272
  const initial_position = {
    latitude: initial_lat,
    longitude: initial_lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }
  const pressSetCenter = () => {
    navigation.navigate('SetCenter', { paramKey1: text1, paramKey2: text2 })
  }

  const { width, height } = Dimensions.get('window')
  const aspect_ratio = width / height
  const [results, setResults] = useState([])
  // Lấy vị trí hiện tại, render ra Text
  useEffect(() => {
    const getLocation = async () => {
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

  let text1 = 'Waiting..'
  let text2 = 'Waiting..'
  if (errorMsg) {
    text2 = errorMsg
  } else if (location) {
    text1 = `${JSON.stringify(title?.['name'])}`
    text2 = `${JSON.stringify(desc?.['streetNumber'])}, ${JSON.stringify(
      desc?.['street']
    )}, ${JSON.stringify(desc?.['district'])}`
  }

  // Nhập địa điểm, hiển thị Marker những địa điểm liên quan
  const [searchText, setSearchText] = useState('')
  const searchPlaces = async () => {
    if (!searchText.trim().length) return
    const googleApisUrl =
      'https://maps.googleapis.com/maps/api/place/textsearch/json'
    const input = searchText.trim()
    const locations = `${currentLocation.coords.latitude},${currentLocation.coords.longitude}&radius=2000`
    const url = `${googleApisUrl}?query=${input}&location=${locations}&key=AIzaSyCIOCzedhM9cEwFpkBjcArUm39jXIyxl0c`
    try {
      const resp = await fetch(url)
      const json = await resp.json()
      //console.log(json)
      if (json && json.results) {
        const coords = []
        for (const item of json.results) {
          //console.log(item.geometry)
          coords.push({
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          })
        }
        setResults(json.results)
        if (coords.length) {
          _map.current?.fitToCoordinates(coords, {
            edgePadding: {
              top: 50,
              right: 50,
              bottom: 50,
              left: 50,
            },
            animated: true,
          })
          Keyboard.dismiss()
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  // Di chuyển Marker, lấy được địa chỉ mới
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

  // Chọn Marker, lấy được địa chỉ mới
  const [selectedMarker, setSelectedMarker] = useState(null)

  const handleMarkerPress = (evt, marker) => {
    const { latitude, longitude } = marker.coordinate
    console.log(
      `Selected Marker: Lat: ${latitude.toFixed(3)}, Lng: ${longitude.toFixed(
        3
      )}`
    )
    // You can update your state or perform any other actions here
    setSelectedMarker(marker)
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={_map}
        showsUserLocation
        showsMyLocationButton={true}
        followsUserLocation={true}
        rotateEnabled={true}
        zoomEnabled={true}
        //provider={PROVIDER_GOOGLE}
        toolbarEnabled={true}
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
            onDragEnd={handleMarkerDragEnd}
            onPress={(evt) =>
              handleMarkerPress(evt, {
                coordinate: { latitude: 47.651968, longitude: 9.478485 },
              })
            }
          />
        )}

        {results.length
          ? results.map((item, i) => {
              const coord = {
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              }
              return (
                <Marker
                  key={`search-item-${i}`}
                  coordinate={coord}
                  title={item.name}
                  description=""
                  draggable
                  isPreselected={true}
                  onDragEnd={handleMarkerDragEnd}
                  onSelect={handleMarkerDragEnd}
                />
              )
            })
          : null}
      </MapView>
      <View style={{ paddingVertical: 42 }}>
        <RowComponent
          justify="flex-end"
          styles={{ marginVertical: 20, paddingHorizontal: 20 }}
        >
          <View style={{ flex: 1 }}>
            <InputComponent
              value={searchText}
              styles={{ marginBottom: 0 }}
              affix={<SearchNormal1 size={20} color={appColors.gray} />}
              placeholder="Search"
              allowClear
              onChange={setSearchText}
            />
          </View>

          <ButtonComponent text="Cancel" type="link" onPress={handleClose} />
        </RowComponent>
        <ButtonComponent text="Search" type="primary" onPress={searchPlaces} />
      </View>
      {/* {selectedMarker && (
        <View style={{ padding: 16 }}>
          <Text>Selected Marker:</Text>
          <Text>Lat: {selectedMarker.coordinate.latitude.toFixed(3)}</Text>
          <Text>Lng: {selectedMarker.coordinate.longitude.toFixed(3)}</Text>
        </View>
      )} */}
      <View style={styles.from}>
        <Flex
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Entypo name="location" size={24} color="black" />
          <Flex style={{ marginLeft: 16, width: 240 }}>
            <Text
              style={{ fontWeight: 'bold', lineHeight: 24, fontSize: 14 }}
              onChangeText={setTitle}
              numberOfLines={1}
            >
              {text1}
            </Text>
            <Text
              style={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}
              onChangeText={setDesc}
              numberOfLines={1}
            >
              {text2}
            </Text>
          </Flex>
        </Flex>
        <MaterialIcons name="favorite" size={20} color="black" />
      </View>
      <TouchableOpacity onPress={pressSetCenter}>
        <View style={styles.btn}>
          <Entypo name="direction" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ModalTo

const styles = StyleSheet.create({
  bximg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: '100%',
    // height: '100%',
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
    top: 470,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#00629D',
    borderRadius: 10,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
})
