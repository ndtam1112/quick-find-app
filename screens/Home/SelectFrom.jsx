import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Button, Flex, Text } from '@react-native-material/core'
import React from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

const SelectFrom = ({ navigation }) => {
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

  const pressSetCenter = () => {
    navigation.navigate('SetCenter')
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
          {/* {centerArounds((item, index) => (
            <MapView.Marker coordinate={item} key={index.toString()}>
              <Image
                source={require('../../assets/ambulance.png')}
                resizeMode="cover"
              />
            </MapView.Marker>
          ))} */}
        </MapView>
        <TouchableOpacity onPress={pressHanderBack}>
          <Entypo name="chevron-thin-left" style={styles.iconbtn} />
        </TouchableOpacity>
        <Flex style={styles.from}>
          <Flex
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome5 name="map-pin" size={24} color="black" />
            <Flex style={{ marginLeft: 16 }}>
              <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                Địa chỉ
              </Text>
              <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                Địa chỉ chính xác
              </Text>
            </Flex>
          </Flex>
          <MaterialIcons name="favorite" size={20} color="black" />
        </Flex>

        <TextInput
          multiline={true}
          style={styles.txinput}
          cursorColor={'#485563'}
          selectionColor={'#29323C'}
          variant="standard"
          placeholder="Ghi chú (nếu có)"
        />
        <TouchableOpacity onPress={pressSetCenter}>
          <Flex style={styles.btn}>
            <Entypo name="direction" size={24} color="black" />
          </Flex>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SelectFrom

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  iconbtn: {
    position: 'absolute',
    bottom: 720,
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
})
