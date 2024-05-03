import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {LoadingModal} from '../../modals';
import {Validate} from '../../utils/validate';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authApi';
import { Text } from '@react-native-material/core';

// interface ErrorMessages {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const initValue = {
//   username: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// const SignUpScreen = ({navigation}: any) => {
//   const [values, setValues] = useState(initValue);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<any>();
//   const [isDisable, setIsDisable] = useState(true);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (
//       !errorMessage ||
//       (errorMessage &&
//         (errorMessage.email ||
//           errorMessage.password ||
//           errorMessage.confirmPassword)) ||
//       !values.email ||
//       !values.password ||
//       !values.confirmPassword
//     ) {
//       setIsDisable(true);
//     } else {
//       setIsDisable(false);
//     }
//   }, [errorMessage, values]);

//   const handleChangeValue = (key: string, value: string) => {
//     const data: any = {...values};

//     data[`${key}`] = value;

//     setValues(data);
//   };

//   const formValidator = (key: string) => {
//     const data = {...errorMessage};
//     let message = ``;

//     switch (key) {
//       case 'email':
//         if (!values.email) {
//           message = `Email is required!!!`;
//         } else if (!Validate.email(values.email)) {
//           message = 'Email is not invalid!!';
//         } else {
//           message = '';
//         }

//         break;

//       case 'password':
//         message = !values.password ? `Password is required!!!` : '';
//         break;

//       case 'confirmPassword':
//         if (!values.confirmPassword) {
//           message = `Please type confirm password!!`;
//         } else if (values.confirmPassword !== values.password) {
//           message = 'Password is not match!!!';
//         } else {
//           message = '';
//         }

//         break;
//     }

//     data[`${key}`] = message;

//     setErrorMessage(data);
//   };

//   const handleRegister = async () => {
//     const api = `/verification`;
//     setIsLoading(true);
//     try {
//       const res = await authenticationAPI.HandleAuthentication(
//         api,
//         {email: values.email},
//         'post',
//       );

//       setIsLoading(false);

//       navigation.navigate('Verification', {
//         code: res.data.code,
//         ...values,
//       });
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <ContainerComponent isImageBackground isScroll back>
//         <SectionComponent>
//           <TextComponent size={24} title text="Sign up" />
//           <SpaceComponent height={21} />
//           <InputComponent
//             value={values.username}
//             placeholder="Full name"
//             onChange={val => handleChangeValue('username', val)}
//             allowClear
//             affix={<User size={22} color={appColors.gray} />}
//           />
//           <InputComponent
//             value={values.email}
//             placeholder="abc@email.com"
//             onChange={val => handleChangeValue('email', val)}
//             allowClear
//             affix={<Sms size={22} color={appColors.gray} />}
//             onEnd={() => formValidator('email')}
//           />
//           <InputComponent
//             value={values.password}
//             placeholder="Password"
//             onChange={val => handleChangeValue('password', val)}
//             isPassword
//             allowClear
//             affix={<Lock size={22} color={appColors.gray} />}
//             onEnd={() => formValidator('password')}
//           />
//           <InputComponent
//             value={values.confirmPassword}
//             placeholder="Confirm password"
//             onChange={val => handleChangeValue('confirmPassword', val)}
//             isPassword
//             allowClear
//             affix={<Lock size={22} color={appColors.gray} />}
//             onEnd={() => formValidator('confirmPassword')}
//           />
//         </SectionComponent>

//         {errorMessage && (
//           <SectionComponent>
//             {Object.keys(errorMessage).map(
//               (error, index) =>
//                 errorMessage[`${error}`] && (
//                   <TextComponent
//                     text={errorMessage[`${error}`]}
//                     key={`error${index}`}
//                     color={appColors.danger}
//                   />
//                 ),
//             )}
//           </SectionComponent>
//         )}
//         <SpaceComponent height={16} />
//         <SectionComponent>
//           <ButtonComponent
//             onPress={handleRegister}
//             text="SIGN UP"
//             disable={isDisable}
//             type="primary"
//           />
//         </SectionComponent>
//         <SectionComponent>
//           <RowComponent justify="center">
//             <TextComponent text="Don’t have an account? " />
//             <ButtonComponent
//               type="link"
//               text="Sign in"
//               onPress={() => navigation.navigate('LoginScreen')}
//             />
//           </RowComponent>
//         </SectionComponent>
//       </ContainerComponent>
//       <LoadingModal visible={isLoading} />
//     </>
//   );
// };
const SignUpScreen = () =>{
  return (
    <Text>a</Text>
  )
}

export default SignUpScreen;




// import { Flex, Text, TextInput, Button } from '@react-native-material/core'
// import React, { useState } from 'react'
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

// const SignUp_2 = ({ navigation }) => {
//   const [name, setName] = useState('')
//   const pressHander = () => {
//     navigation.navigate('ShareLocation')
//   }
//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         Keyboard.dismiss()
//       }}
//     >
//       <Flex style={globalStyle.container}>
//         <Flex style={styles.container_2}>
//           <Entypo name="chevron-thin-left" style={globalStyle.iconbtn} />
//           <Text style={globalStyle.h3}>Đăng ký</Text>
//           <AntDesign name="questioncircleo" style={globalStyle.iconbtn} />
//         </Flex>
//         <Flex style={styles.container}>
//           <Text style={globalStyle.label}>Username</Text>
//           <Flex style={{ flexDirection: 'row' }}>
//             <Text>{name}</Text>
//             <Text
//               style={{
//                 textDecorationStyle: 'solid',
//                 textDecorationLine: 'underline',
//                 marginLeft: 16,
//               }}
//             >
//               Thay đổi
//             </Text>
//           </Flex>
//         </Flex>
//         <TextInput
//           cursorColor={'#485563'}
//           selectionColor={'#29323C'}
//           variant="standard"
//           placeholder="Họ và tên"
//           onChangeText={(val) => setName(val)}
//           style={globalStyle.txinput}
//         />
//         <TextInput
//           cursorColor={'#485563'}
//           selectionColor={'#29323C'}
//           variant="standard"
//           placeholder="Password"
//           onChangeText={(val) => setName(val)}
//           style={globalStyle.txinput}
//         />
//         <Button style={styles.btn} onPress={pressHander} title="Đăng ký" />
//       </Flex>
//     </TouchableWithoutFeedback>
//   )
// }

// export default SignUp_2
