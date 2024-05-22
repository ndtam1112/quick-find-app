import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Divider, Flex, Text } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
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

const InfoOrder = ({ navigation, route }) => {
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
    navigation.navigate('SearchDriver')
  }

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
            {/* <Flex style={{ marginTop: 16 }}>
              <Flex
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                <Text style={styles.textdetail}>Tổng tiền</Text>
                <Text style={styles.textdetail}>đ200.000</Text>
              </Flex>
              <Flex
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.textdetail}>Voucher giảm giá</Text>
                <Text style={styles.textdetail}>đ0</Text>
              </Flex>
            </Flex> */}
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
