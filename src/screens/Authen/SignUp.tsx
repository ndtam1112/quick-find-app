import { Lock, Sms, User } from 'iconsax-react-native'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, Switch, View } from 'react-native'
import authenticationAPI from '../../apis/authApi'
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components'
import { appColors } from '../../constants/appColors'
import { Validate } from '../../utils/validate'
import { addAuth } from '../../redux/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text } from '@react-native-material/core'
import { globalStyles } from '../../styles/globalStyles'
import SocialLogin from './components/SocialLogin'
import { LoadingModal } from '../../modals'
import { useDispatch } from 'react-redux'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({ navigation }: any) => {
  const [values, setValues] = useState(initValue)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<any>()
  const [isDisable, setIsDisable] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if (values.email || values.password) {
      setErrorMessage('')
    }
  }, [values.email, values.password])

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }

    data[`${key}`] = value

    setValues(data)
  }

  const handleRegister = async () => {
    const { email, password, confirmPassword } = values
    const passValidation = Validate.Password(password)
    const emailValidation = Validate.email(email)

    if (email && password && confirmPassword) {
      if (emailValidation && passValidation) {
        setErrorMessage('')
        setIsLoading(true)
        try {
          const res = await authenticationAPI.HandleAuthentication(
            '/register',
            {
              fullname: values.username,
              email,
              password,
            },
            'post'
          )
          dispatch(addAuth(res.data))
          await AsyncStorage.setItem('auth', JSON.stringify(res.data))
          setIsLoading(false)
          //   api,
          //   {email: values.email},
          //   'post',
          // );
          // setIsLoading(false);
          // navigation.navigate('Verification', {
          //   code: res.data.code,
          //   ...values,
          // });
        } catch (error) {
          console.log(error)
          setIsLoading(false)
        }
      } else {
        setErrorMessage('Email not correct!')
      }
    } else {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin')
    }
    // const api = `/verification`;
  }

  return (
    <>
      <ContainerComponent isImageBackground back isScroll>
        <SectionComponent>
          <TextComponent
            styles={{ fontWeight: 'bold' }}
            size={24}
            title
            text="Đăng ký"
          />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.username}
            placeholder="Fullname"
            onChange={(val) => handleChangeValue('username', val)}
            allowClear
            affix={<User size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.email}
            placeholder="abc@email.com"
            onChange={(val) => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.password}
            placeholder="Password"
            onChange={(val) => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.confirmPassword}
            placeholder="Confirm Password"
            onChange={(val) => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
          />
        </SectionComponent>
        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    text={errorMessage[`${error}`]}
                    key={`error${index}`}
                    color={appColors.danger}
                  />
                )
            )}
          </SectionComponent>
        )}
        <SpaceComponent height={16} />
        <SectionComponent styles={{ justifyContent: 'center' }}>
          <ButtonComponent
            text="SIGN UP"
            type="primary"
            onPress={handleRegister}
          />
        </SectionComponent>
        <SocialLogin />
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Bạn đã có tài khoản? " />
            <ButtonComponent
              type="link"
              text="Đăng nhập"
              onPress={() => navigation.navigate('Login')}
            />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  )
}

export default SignUpScreen

// import { Flex, Text, TextInput, Button } from '@react-native-material/core'
// import React, { useState, ReactNode } from 'react'
// import { Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
// import { StyleSheet } from 'react-native'
// import { Entypo } from '@expo/vector-icons'
// import { AntDesign } from '@expo/vector-icons'
// import { globalStyle } from '../../styles/global'
// import { Link } from '@mui/material'

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     width: '80%',
//   },
//   container_2: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: 60,
//     width: '90%',
//   },
//   img: {
//     width: 50,
//     height: 50,
//   },
//   btn: {
//     backgroundColor: '#00629D',
//     borderRadius: 30,
//     marginTop: 16,
//   },
// })

// interface Props {
//   value: string;
//   onChange: (val: string) => void;
//   affix?: ReactNode;
//   placeholder?: string;
//   suffix?: ReactNode;
//   isPassword?: boolean;
//   allowClear?: boolean
// }

// const Login = (props: Props) => {
//   const {value, onChange, affix, suffix, placeholder, isPassword, allowClear} = props;

//   const [username, setUserName] = useState('')
//   const [isShowPass, setIsShowPass] = useState(isPassword ?? false)

//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         Keyboard.dismiss()
//       }}
//     >
//       <Flex style={globalStyle.container}>
//         <Flex style={styles.container_2}>
//           <Entypo name="chevron-thin-left" style={globalStyle.iconbtn} />
//           <Image
//             source={require('../../assets/splash.png')}
//             style={styles.img}
//           />
//           <AntDesign name="questioncircleo" style={globalStyle.iconbtn} />
//         </Flex>
//         <Text style={globalStyle.h3}>Welcome back {username}</Text>
//         <Flex style={styles.container}>
//           <Text style={globalStyle.label}>Username</Text>
//           <Text>ndtam</Text>
//         </Flex>
//         <TextInput
//           cursorColor={'#485563'}
//           selectionColor={'#29323C'}
//           variant="standard"
//           placeholder="Password"
//           onChangeText={(val) => setUserName(val)}
//           style={globalStyle.txinput}
//         />
//         <Button style={styles.btn} title="Đăng nhập" />
//       </Flex>
//     </TouchableWithoutFeedback>
//   )
// }

// export default Login
