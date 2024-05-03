import { ActivityIndicator, Flex, Text } from '@react-native-material/core'
import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet } from 'react-native'
import ForeWord from './ForeWord'
import { appInfo } from '../../constants/appInfo'
import { SpaceComponent } from '../../components'
import { appColors } from '../../constants/appColors'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#00629D',
  },
  img: {
    width: 100,
    height: 100,
  },
})

const Splash = () => {
  return (
    <ImageBackground
      source={require('../../assets/splash.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      imageStyle={{ flex: 1 }}
    >
      {/* <Image
        source={require('../../assets/splash.png')}
        style={{ width: appInfo.sizes.WIDTH * 0.7, resizeMode: 'contain' }}
      /> */}
      <SpaceComponent height={180} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  )
}

export default Splash
