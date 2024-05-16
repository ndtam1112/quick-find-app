import axios from 'axios'
import { SearchNormal1 } from 'iconsax-react-native'
import React, { useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  ButtonComponent,
  InputComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../components'
import { appColors } from '../constants/appColors'
import { LocationModel } from '../models/LocationModel'
import MapView, { PROVIDER_GOOGLE, Marker, LatLng } from 'react-native-maps'
import { appInfo } from '../constants/appInfo'
import { AddressModel } from '../models/AddressModel'
import * as Location from 'expo-location'
import { globalStyle } from '../styles/global'

interface Props {
  visible: boolean
  onClose: () => void
  onSelect: (val: {
    address: string
    postion?: {
      lat: number
      long: number
    }
  }) => void
}

const ModalLocation = (props: Props) => {
  const { visible, onClose, onSelect } = props
  const [searchKey, setSearchKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [locations, setLocations] = useState<LocationModel[]>([])
  const [addressSelected, setAddressSelected] = useState('')

  const handleClose = () => {
    onClose()
  }

  const _map = useRef<MapView | null>(null)
  const [title, setTitle] = useState<any | null>()
  const [desc, setDesc] = useState<any | null>()
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

  const { width, height } = Dimensions.get('window')
  const aspect_ratio = width / height
  const [results, setResults] = useState<any[]>([])

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
      //setTitle(reverseGeocodeAddress[0])
      //setDesc(reverseGeocodeAddress[0])
      console.log('Reverse:')
      console.log(reverseGeocodeAddress)
    }

    getLocation()
  }, [])

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
        const coords: LatLng[] = []
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

  return (
    <Modal animationType="slide" visible={visible} style={{ flex: 1 }}>
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
          />
        )}

        {results.length
          ? results.map((item, i) => {
              const coord: LatLng = {
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
                  onDragEnd={handleMarkerDragEnd}
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
    </Modal>
  )
}

export default ModalLocation

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
})
