import { Flex, Text, TextInput } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import {
  Image,
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { globalStyle } from '../../styles/global'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import {
  CircleComponent,
  InputComponent,
  RowComponent,
  TextComponent,
} from '../../components'

import { appColors } from '../../constants/appColors'
import * as Location from 'expo-location'
import { AddressModel } from '../../models/AddressModel'
import { Notification } from 'iconsax-react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00629D',
    paddingTop: 50,
    height: '30%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 62,
    paddingHorizontal: 24,
  },
  main_header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    marginLeft: -24,
  },
  imgbtn: {
    width: 40,
    height: 40,
  },
  text: {
    color: '#fff',
  },
  txinput: {
    color: '#111',
    borderBottomColor: '#485563',
    marginTop: 0,
    borderColor: '#fff',
    flex: 1,
  },
  content: {
    flex: 2,
    display: 'flex',
    width: '100%',
    paddingLeft: 24,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    width: '80%',
    letterSpacing: 0.9,
  },
  btnimg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: '50%',
  },
})

const Home = ({ navigation }) => {
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [currentLocation, setCurrentLocation] = useState()
  const [initialRegion, setInitialRegion] = useState(null)
  const [location, setLocation] = useState()
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
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
    // const text1Json = JSON.stringify(title?.['name'])
    // const text1 = text1Json.replace(/"(.+)"/g, '$1')

    text1 = `${JSON.stringify(title?.['name'])}`
    text2 = `${JSON.stringify(desc?.['name'])}, ${JSON.stringify(
      desc?.['subregion']
    )}, ${JSON.stringify(desc?.['city'])}`
  }
  const pressBookCar = () => {
    navigation.navigate('SetTo')
  }
  const pressListFav = () => {
    navigation.navigate('ListFav')
  }

  return (
    <View style={[styles.container]}>
      <View
        style={{
          backgroundColor: '#00629D',
          height: 178 + (Platform.OS === 'ios' ? 16 : 0),
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 52,
        }}
      >
        <View style={{ paddingHorizontal: 16 }}>
          <RowComponent>
            <TouchableOpacity>
              <Entypo size={24} color={appColors.white} />
            </TouchableOpacity>
            <View style={[{ flex: 1, alignItems: 'center' }]}>
              <RowComponent>
                <TextComponent
                  text="Current Location"
                  color={appColors.white2}
                  size={12}
                />
                <MaterialIcons
                  name="arrow-drop-down"
                  size={18}
                  color={appColors.white}
                />
              </RowComponent>
              <TextComponent
                numberOfLine={2}
                text={text1}
                flex={0}
                color={appColors.white}
                size={13}
                styles={{ width: 240, textAlign: 'center' }}
              />
            </View>

            <CircleComponent color="#524CE0" size={36}>
              <View>
                <Notification size={18} color={appColors.white} />
                <View
                  style={{
                    backgroundColor: '#02E9FE',
                    width: 10,
                    height: 10,
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: '#524CE0',
                    position: 'absolute',
                    top: -2,
                    right: -2,
                  }}
                />
              </View>
            </CircleComponent>
          </RowComponent>
          <View>
            <View style={styles.content}>
              <Text style={styles.h2}>Dịch vụ</Text>
              <TouchableOpacity onPress={pressBookCar}>
                <Flex>
                  <Flex style={styles.btnimg}>
                    <Image
                      source={require('../../assets/ambulance.png')}
                      style={styles.imgbtn}
                    />
                  </Flex>
                  <Text style={{ marginTop: 4 }}>Đặt xe</Text>
                </Flex>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* <View style={styles.header}>
        <RowComponent justify="space-between">
          <TextComponent text={`Hi you`} size={18} color="white" />
          <View style={[{ flex: 1, alignItems: 'center' }]}>
            <Image
              source={require('../../assets/adaptive-icon.png')}
              style={styles.img}
            />
          </View>
          <TouchableOpacity onPress={pressListFav}>
            <MaterialIcons name="favorite" size={24} color="black" />
          </TouchableOpacity>
        </RowComponent>
      </View> */}
      <GooglePlacesAutocomplete
        // style={styles.txinput}
        // leading={(props) => <EvilIcons name="search" size={24} color="black" />}
        // cursorColor={'#485563'}
        // selectionColor={'#29323C'}
        placeholder="Search"
        //enableHighAccuracyLocation
        onPress={(data, details = null) => {
          //setdestinationPlace({ data, details })
          console.log(data, details)
        }}
        fetchDetails
        query={{
          key: 'AIzaSyCIOCzedhM9cEwFpkBjcArUm39jXIyxl0c',
          language: 'en',
        }}
        onFail={(error) => console.log(error)}
      />
    </View>
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss()
    //   }}
    // >
    //   <Flex style={styles.container}>
    //     <Flex style={styles.header}>
    //       <Flex style={styles.main_header}>
    //         <Text style={styles.text}>Hi, You</Text>
    //         <Flex
    //           style={{
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             marginLeft: -36,
    //           }}
    //         >
    //           <Image
    //             source={require('../../assets/adaptive-icon.png')}
    //             style={styles.img}
    //           />
    //         </Flex>
    //         <TouchableOpacity onPress={pressListFav}>
    //           <MaterialIcons name="favorite" size={24} color="black" />
    //         </TouchableOpacity>
    //       </Flex>

    //       <GooglePlacesAutocomplete
    //         style={styles.txinput}
    //         leading={(props) => (
    //           <EvilIcons name="search" size={24} color="black" />
    //         )}
    //         cursorColor={'#485563'}
    //         selectionColor={'#29323C'}
    //         placeholder="Search"
    //         onPress={(data, details = null) => {
    //           setdestinationPlace({ data, details })
    //           console.log(data, details)
    //         }}
    //         fetchDetails
    //         query={{
    //           key: 'AIzaSyB1Zkal6o9TOE-bvJcfrmtt-USmdE1pkAM',
    //           language: 'en',
    //         }}
    //       />
    //     </Flex>
    //     <Flex style={styles.content}>
    //       <Text style={styles.h2}>Dịch vụ</Text>
    //       <TouchableOpacity onPress={pressBookCar}>
    //         <Flex>
    //           <Flex style={styles.btnimg}>
    //             <Image
    //               source={require('../../assets/ambulance.png')}
    //               style={styles.imgbtn}
    //             />
    //           </Flex>
    //           <Text style={{ marginTop: 4 }}>Đặt xe</Text>
    //         </Flex>
    //       </TouchableOpacity>
    //     </Flex>
    //   </Flex>
    // </TouchableWithoutFeedback>
  )
}

export default Home
