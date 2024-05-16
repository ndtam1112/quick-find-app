import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { ReactNode } from 'react'
import HomeStack from './HomeStack'
import ChatStack from './ChatStack'
import EmergencyStack from './EmergencyStack'
import OrderStack from './OrderStack'
import settingStack from './settingStack'
import { appColors } from '../constants/appColors'
import { CircleComponent, TextComponent } from '../components'
import { Platform, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { AntDesign } from '@expo/vector-icons'
import Home from '../screens/Home/Home'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 68,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColors.white,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon: ReactNode
          color = focused ? appColors.primary : appColors.gray5
          size = 24
          switch (route.name) {
            case 'Trang chủ':
              icon = <AntDesign name="home" size={size} color={color} />
              break

            case 'Tin nhắn':
              icon = (
                <AntDesign
                  name="message1"
                  size={size}
                  variant="Bold"
                  color={color}
                />
              )

              break
            case 'Chuyến xe':
              icon = (
                <AntDesign
                  name="profile"
                  size={size}
                  variant="Bold"
                  color={color}
                />
              )
              break
            case 'Cài đặt':
              icon = (
                <AntDesign
                  name="setting"
                  size={size}
                  variant="Bold"
                  color={color}
                />
              )
              break

            case 'Cấp cứu':
              icon = (
                <CircleComponent
                  size={65}
                  styles={[
                    globalStyles.shadow,
                    {
                      marginTop: Platform.OS === 'ios' ? -50 : -60,
                      backgroundColor: '#f82f2f',
                    },
                  ]}
                >
                  <AntDesign
                    name="warning"
                    size={24}
                    color={appColors.white}
                    variant="Bold"
                  />
                </CircleComponent>
              )
              break
          }
          return icon
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabel({ focused }) {
          return route.name === 'Cấp cứu' ? null : (
            <TextComponent
              text={route.name}
              flex={0}
              size={12}
              color={focused ? appColors.primary : appColors.gray5}
              styles={{
                marginBottom: Platform.OS === 'android' ? 12 : 0,
              }}
            />
          )
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeStack} />
      <Tab.Screen name="Tin nhắn" component={ChatStack} />
      <Tab.Screen name="Cấp cứu" component={EmergencyStack} />
      <Tab.Screen name="Chuyến xe" component={OrderStack} />
      <Tab.Screen name="Cài đặt" component={settingStack} />
    </Tab.Navigator>
  )
}

export default TabNavigator
