import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Button, Flex, Text, TextInput } from '@react-native-material/core'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { globalStyle } from '../../styles/global'

const Info = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '100%',
    },
    header: {
      backgroundColor: '#00629D',
      paddingTop: 60,
      paddingLeft: 24,
      paddingBottom: 16,
      height: 100,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    iconbtn: {
      fontSize: 18,
      color: '#fff',
      marginRight: 16,
    },
    h2: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,0.1)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 16,
    },
    flist: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fff',
      marginTop: 18,
      marginLeft: 18,
      marginRight: 18,
      marginBottom: 60,
      position: 'relative',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.6)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: 'rgba(0,0,0,0.7)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    btn: {
      backgroundColor: '#00629D',
      borderRadius: 30,
      marginTop: 16,
    },
    content: {
      padding: 24,
    },
    txinput: {
      color: '#111',
      borderBottomColor: '#485563',
    },
  })
  const [name, setName] = useState('Tạ Văn A')
  const [phone, setPhone] = useState('0987654321')
  const [password, setPassword] = useState('aaaaaaa')
  const [address, setAddress] = useState(
    'Số 5, phố Đại Linh, phường Trung Văn, quận Nam Từ Liêm, Hà Nội'
  )
  const pressHander = () => {
    navigation.navigate('Login')
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
      <Flex style={styles.container}>
        <Flex style={styles.header}>
          <Entypo
            onPress={pressHanderBack}
            name="chevron-thin-left"
            style={styles.iconbtn}
          />
          <Text style={styles.h2}>Thông tin cá nhân</Text>
        </Flex>
        <Flex style={styles.content}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 24,
              marginBottom: 16,
            }}
          >
            <Flex style={{ flex: 1 }}>
              <Text style={globalStyle.label}>Họ và tên</Text>
              <TextInput
                cursorColor={'#485563'}
                selectionColor={'#29323C'}
                variant="standard"
                placeholder="Họ và tên"
                value={name}
                onChangeText={(val) => setName(val)}
                style={styles.txinput}
              />
            </Flex>
            <Flex style={{ flex: 1 }}>
              <Text style={globalStyle.label}>Số điện thoại</Text>
              <TextInput
                cursorColor={'#485563'}
                selectionColor={'#29323C'}
                variant="standard"
                placeholder="Số điện thoại"
                value={phone}
                onChangeText={(val) => setPhone(val)}
                style={styles.txinput}
              />
            </Flex>
          </View>
          <Text style={globalStyle.label}>Địa chỉ</Text>
          <TextInput
            cursorColor={'#485563'}
            selectionColor={'#29323C'}
            variant="standard"
            placeholder="Địa chỉ"
            value={address}
            style={{ marginBottom: 16 }}
            onChangeText={(val) => setAddress(val)}
          />
          <Text style={globalStyle.label}>Mật khẩu</Text>
          <TextInput
            cursorColor={'#485563'}
            selectionColor={'#29323C'}
            variant="standard"
            placeholder="Password"
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
          <Button style={styles.btn} title="Lưu thông tin" />
        </Flex>
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default Info
