import { Lock, Sms } from 'iconsax-react-native'
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
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text } from '@react-native-material/core'
import { globalStyles } from '../../styles/globalStyles'

// const LoginScreen = ({navigation}: any) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRemember, setIsRemember] = useState(true);
//   const [isDisable, setIsDisable] = useState(true);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const emailValidation = Validate.email(email);

//     if (!email || !password || !emailValidation) {
//       setIsDisable(true);
//     } else {
//       setIsDisable(false);
//     }
//   }, [email, password]);

//   const handleLogin = async () => {
//     const emailValidation = Validate.email(email);
//     if (emailValidation) {
//       try {
//         const res = await authenticationAPI.HandleAuthentication(
//           '/login',
//           {email, password},
//           'post',
//         );

//         dispatch(addAuth(res.data));

//         await AsyncStorage.setItem(
//           'auth',
//           isRemember ? JSON.stringify(res.data) : email,
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       Alert.alert('Email is not correct!!!!');
//     }
//   };

//   return (
//     <ContainerComponent isImageBackground isScroll>
//       <SectionComponent
//         styles={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: 75,
//         }}>
//         <Image
//           source={require('../../assets/fore-1.png')}
//           style={{
//             width: 162,
//             height: 114,
//             marginBottom: 30,
//           }}
//         />
//       </SectionComponent>
//       <SectionComponent>
//         <TextComponent size={24} title text="Sign in" />
//         <SpaceComponent height={21} />
//         <InputComponent
//           value={email}
//           placeholder="Email"
//           onChange={val => setEmail(val)}
//           allowClear
//           affix={<Sms size={22} color={appColors.gray} />}
//         />
//         <InputComponent
//           value={password}
//           placeholder="Password"
//           onChange={val => setPassword(val)}
//           isPassword
//           allowClear
//           affix={<Lock size={22} color={appColors.gray} />}
//         />
//         <RowComponent justify="space-between">
//           <RowComponent onPress={() => setIsRemember(!isRemember)}>
//             <Switch
//               trackColor={{true: appColors.primary}}
//               thumbColor={appColors.white}
//               value={isRemember}
//               onChange={() => setIsRemember(!isRemember)}
//             />
//             <SpaceComponent width={4} />
//             <TextComponent text="Remember me" />
//           </RowComponent>
//           <ButtonComponent
//             text="Forgot Password?"
//             onPress={() => navigation.navigate('ForgotPassword')}
//             type="text"
//           />
//         </RowComponent>
//       </SectionComponent>
//       <SpaceComponent height={16} />
//       <SectionComponent>
//         <ButtonComponent
//           disable={isDisable}
//           onPress={handleLogin}
//           text="SIGN IN"
//           type="primary"
//         />
//       </SectionComponent>
//       <SectionComponent>
//         <RowComponent justify="center">
//           <TextComponent text="Don’t have an account? " />
//           <ButtonComponent
//             type="link"
//             text="Sign up"
//             onPress={() => navigation.navigate('SignUpScreen')}
//           />
//         </RowComponent>
//       </SectionComponent>
//     </ContainerComponent>
//   );
// };

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <ContainerComponent isImageBackground>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={(val) => setEmail(val)}
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={(val) => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </ContainerComponent>
  )
}

export default LoginScreen

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
