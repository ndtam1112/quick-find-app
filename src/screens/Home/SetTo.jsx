





import {
  Entypo,
  EvilIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Flex, Text, TextInput } from '@react-native-material/core'
import React, { useEffect } from 'react'
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { fontWeight } from '@mui/system'
import { TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import ChoiceLocation from '../../components/ChoiceLocation'
import {
  ButtonComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { ArrowRight2, Location } from 'iconsax-react-native'
import { appColors } from '../../constants/appColors'

const SetTo = ({ navigation }) => {
  const pressSelectTo = () => {
    navigation.navigate('SelectTo')
  }
  const pressListFav = () => {
    navigation.navigate('ListFav')
  }
  const pressModalTo = () => {
    navigation.navigate('ModalTo')
  }
  const pressSetFrom = () => {
    navigation.navigate('SetFrom')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  const [text, onChangeText] = React.useState('')
  const [originPlace, setoriginPlace] = React.useState('')
  const [destinationPlace, setdestinationPlace] = React.useState('')

  // useEffect(() => {
  //   console.warn('useEffect is called')
  //   if (originPlace && destinationPlace) {
  //     console.warn('Redirect to results')
  //   }
  // }, [originPlace, destinationPlace])
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <ScrollView>
        <Flex style={styles.container}>
          <Flex style={styles.header}>
            <Text style={styles.h2}>Chọn điểm đến</Text>
            <Text style={styles.text}>
              Sức khỏe của bạn là sứ mệnh của chúng tôi!
            </Text>
            <Image
              style={styles.thumb2}
              source={require('../../assets/thumb-2.png')}
            />
            <Flex style={styles.main_header}>
              <TouchableOpacity onPress={pressHanderBack}>
                <Entypo name="chevron-thin-left" style={styles.iconbtn} />
              </TouchableOpacity>
              <Image
                source={require('../../assets/adaptive-icon.png')}
                style={styles.img}
              />
              <TouchableOpacity onPress={pressSelectTo}>
                <Ionicons name="map-outline" size={24} color="white" />
              </TouchableOpacity>
            </Flex>
            <RowComponent
              onPress={pressModalTo}
              styles={[styles.inputContainer]}
            >
              <Location
                variant="Bold"
                size={22}
                color={`${appColors.primary}80`}
              />

              <SpaceComponent width={12} />

              <TextComponent
                numberOfLine={1}
                //text={addressSelected ? addressSelected.address : 'Choice'}
                text="Điểm đến?"
                flex={1}
              />
              <ArrowRight2 color={appColors.primary} size={22} />
            </RowComponent>
          </Flex>
          <Flex style={styles.listSub}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}
            >
              Địa điểm gần đây
            </Text>
            <TouchableOpacity onPress={pressSetFrom}>
              <Flex style={styles.from}>
                <Flex
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome5 name="map-marker-alt" size={24} color="black" />
                  <Flex style={{ marginLeft: 16 }}>
                    <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                      Bệnh viện Bạch Mai
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                      Số 78 đường Giải Phóng, phường Phương Mai, quận Đống Đa,
                      Hà Nội
                    </Text>
                  </Flex>
                </Flex>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressSetFrom}>
              <Flex style={styles.from}>
                <Flex
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome5 name="map-marker-alt" size={24} color="black" />
                  <Flex style={{ marginLeft: 16 }}>
                    <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                      Bệnh viện Nhiệt đới Trung ương
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                      Số 78, Đường Giải Phóng, Hà Nội
                    </Text>
                  </Flex>
                </Flex>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressSetFrom}>
              <Flex style={styles.from}>
                <Flex
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome5 name="map-marker-alt" size={24} color="black" />
                  <Flex style={{ marginLeft: 16 }}>
                    <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                      Bệnh viện Đại học Y Hà Nội
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                      1 P. Tôn Thất Tùng, Kim Liên, Đống Đa, Hà Nội
                    </Text>
                  </Flex>
                </Flex>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
          </Flex>
          <Flex style={{ paddingLeft: 24, paddingRight: 24, marginTop: 8 }}>
            <TouchableOpacity onPress={pressListFav}>
              <Flex
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Đến các Địa điểm đã lưu
                </Text>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
            <Flex style={{ marginLeft: 8, marginRight: 8 }}>
              <TouchableOpacity onPress={pressSetFrom}>
                <Flex style={styles.from}>
                  <Flex
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color="black"
                    />
                    <Flex style={{ marginLeft: 16 }}>
                      <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                        Bệnh viện Y học Cổ truyền Bộ công an
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        278 Lương Thế Vinh, Trung Văn, Từ Liêm, Hà Nội
                      </Text>
                    </Flex>
                  </Flex>
                  <Entypo name="chevron-thin-right" size={18} color="black" />
                </Flex>
              </TouchableOpacity>
            </Flex>
          </Flex>
        </Flex>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default SetTo

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  header: {
    backgroundColor: '#00629D',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 50,
    height: '40%',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  main_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconbtn: {
    fontSize: 18,
    color: '#fff',
    marginRight: 16,
  },
  img: {
    width: 40,
    height: 40,
  },
  text: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    width: '40%',
    color: '#fff',
  },
  txinput: {
    position: 'absolute',
    bottom: -35,
    left: 24,
    width: '100%',
    color: '#111',
    borderBottomColor: '#485563',
    marginTop: 16,
    borderColor: '#fff',
  },
  h2: {
    color: '#fff',
    position: 'absolute',
    bottom: 84,
    left: 24,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    letterSpacing: 0.9,
  },
  thumb2: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 24,
    top: 75,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginBottom: 16,
  },
  thumbContainer: {
    width: 70,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listSub: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    marginLeft: 8,
    marginRight: 8,
  },
  btn: {
    backgroundColor: '#00629D',
    position: 'fixed',
    bottom: -12,
    marginLeft: 24,
    marginRight: 24,
  },
  from: {
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
  inputContainer: {
    position: 'absolute',
    top: 186,
    left: 25,
    right: 20,
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },
})
