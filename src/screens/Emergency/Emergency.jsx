import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import { Flex, Text } from '@react-native-material/core'
import React from 'react'
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
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
})

const Emergency = () => {
  const listEmer = [
    {
      id: 1,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
    {
      id: 2,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
    {
      id: 3,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
    {
      id: 4,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
    {
      id: 5,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
    {
      id: 6,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
    {
      id: 7,
      name: 'Tên trung tâm',
      address: 'Địa chỉ',
      phoneEmer: '*0911',
    },
  ]
  const oneEmer = ({ item }) => (
    <TouchableOpacity>
      <Flex style={styles.from}>
        <Flex
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons name="ambulance" size={24} color="black" />
          <Flex style={{ marginLeft: 16 }}>
            <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
              {item.address}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: 'rgba(226, 10, 10, 0.6)',
                marginTop: 4,
              }}
            >
              {item.phoneEmer}
            </Text>
          </Flex>
        </Flex>
        <SimpleLineIcons name="call-out" size={24} color="black" />
      </Flex>
    </TouchableOpacity>
  )
  return (
    <Flex style={styles.container}>
      <Flex style={styles.header}>
        <Entypo name="chevron-thin-left" style={styles.iconbtnn} />
        <Text style={styles.h2}>Cấp cứu</Text>
        <Entypo name="chevron-thin-left" style={styles.iconbtnn} />
      </Flex>
      <FlatList
        style={styles.flist}
        data={listEmer}
        renderItem={oneEmer}
      ></FlatList>
    </Flex>
  )
}

export default Emergency
