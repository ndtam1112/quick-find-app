import {
  Entypo,
  EvilIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Flex, Text, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { fontWeight } from '@mui/system'

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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
})

const SetFrom = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const pressSelectFrom = () => {
    navigation.navigate('SelectFrom')
  }

  const pressSetCenter = () => {
    navigation.navigate('SetCenter')
  }
  const pressSetCenter2 = () => {
    navigation.navigate('SetCenter')
    setModalVisible(!modalVisible)
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
      <ScrollView>
        <Flex style={styles.container}>
          <Flex style={styles.header}>
            <Text style={styles.h2}>Chọn điểm đón</Text>
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
              <TouchableOpacity onPress={pressSelectFrom}>
                <Ionicons name="ios-map-outline" size={24} color="white" />
              </TouchableOpacity>
            </Flex>
            <TextInput
              cursorColor={'#485563'}
              selectionColor={'#29323C'}
              placeholder="Điểm đón?"
              style={styles.txinput}
              leading={(props) => (
                <FontAwesome5 name="map-pin" size={24} color="black" />
              )}
            />
          </Flex>
          <Flex style={styles.listSub}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}
            >
              Địa điểm gần đây
            </Text>
            <TouchableOpacity onPress={pressSetCenter}>
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
                      Trường Đại học Kinh tế Quốc dân
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                      207 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội
                    </Text>
                  </Flex>
                </Flex>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressSetCenter}>
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
                      Trường Đại học Y Hà Nội
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                      1 P. Tôn Thất Tùng, Kim Liên, Đống Đa, Hà Nội
                    </Text>
                  </Flex>
                </Flex>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressSetCenter}>
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
                      Trường Đại học Thủy Lợi
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                      175 P. Tây Sơn, Trung Liệt, Đống Đa, Hà Nội
                    </Text>
                  </Flex>
                </Flex>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
          </Flex>
          <Flex style={{ paddingLeft: 24, paddingRight: 24, marginTop: 8 }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
                  Điểm đón đã lưu
                </Text>
                <Entypo name="chevron-thin-right" size={18} color="black" />
              </Flex>
            </TouchableOpacity>
            <Modal
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
                  <TouchableOpacity
                    style={{ width: '100%' }}
                    onPress={pressSetCenter2}
                  >
                    <Flex style={styles.from2}>
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
                          <Text
                            style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}
                          >
                            Địa chỉ chính xác
                          </Text>
                        </Flex>
                      </Flex>
                      <MaterialIcons name="favorite" size={20} color="black" />
                    </Flex>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: '100%' }}
                    onPress={pressSetCenter2}
                  >
                    <Flex style={styles.from2}>
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
                          <Text
                            style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}
                          >
                            Địa chỉ chính xác
                          </Text>
                        </Flex>
                      </Flex>
                      <MaterialIcons name="favorite" size={20} color="black" />
                    </Flex>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: '100%' }}
                    onPress={pressSetCenter2}
                  >
                    <Flex style={styles.from2}>
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
                          <Text
                            style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}
                          >
                            Địa chỉ chính xác
                          </Text>
                        </Flex>
                      </Flex>
                      <MaterialIcons name="favorite" size={20} color="black" />
                    </Flex>
                  </TouchableOpacity>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Đóng</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Flex style={{ marginLeft: 8, marginRight: 8 }}>
              <TouchableOpacity onPress={pressSetCenter}>
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
                        Trường Đại học Thủy Lợi
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        175 P. Tây Sơn, Trung Liệt, Đống Đa, Hà Nội
                      </Text>
                    </Flex>
                  </Flex>
                  <Entypo name="chevron-thin-right" size={18} color="black" />
                </Flex>
              </TouchableOpacity>
            </Flex>
          </Flex>
          <Button
            onPress={pressSetCenter}
            style={styles.btn}
            title="Chọn điểm đón này"
          />
        </Flex>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default SetFrom
