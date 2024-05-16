import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { LoginManager, Profile, Settings } from 'react-native-fbsdk-next'
import { useDispatch } from 'react-redux'
import authenticationAPI from '../../../apis/authApi'
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components'
import { appColors } from '../../../constants/appColors'
import { LoadingModal } from '../../../modals'
import { addAuth } from '../../../redux/reducers/authReducer'
import { Button, Text } from '@react-native-material/core'
import { StyleSheet } from 'react-native'

// GoogleSignin.configure({
//   webClientId:
//     '51183564123-pf81s6h2gnkmudbcnhe2j6ke2eapt6l1.apps.googleusercontent.com',
//   iosClientId:
//     '51183564123-ftijaqo23c9thm2kfe9ssgqq6p92ru72.apps.googleusercontent.com',
// });
// Settings.setAppID('684546690239906');

// const SocialLogin = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const api = `/google-signin`;
//   const dispatch = useDispatch();

//   const handleLoginWithGoogle = async () => {
//     await GoogleSignin.hasPlayServices({
//       showPlayServicesUpdateDialog: true,
//     });

//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       const user = userInfo.user;

//       const res: any = await authenticationAPI.HandleAuthentication(
//         api,
//         user,
//         'post',
//       );

//       dispatch(addAuth(res.data));

//       await AsyncStorage.setItem('auth', JSON.stringify(res.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLoginWithFacebook = async () => {
//     try {
//       const result = await LoginManager.logInWithPermissions([
//         'public_profile',
//       ]);

//       if (result.isCancelled) {
//         console.log('Login cancel');
//       } else {
//         const profile = await Profile.getCurrentProfile();

//         if (profile) {
//           setIsLoading(true);
//           const data = {
//             name: profile.name,
//             givenName: profile.firstName,
//             familyName: profile.lastName,
//             email: profile.userID,
//             photo: profile.imageURL,
//           };

//           const res: any = await authenticationAPI.HandleAuthentication(
//             api,
//             data,
//             'post',
//           );

//           dispatch(addAuth(res.data));

//           await AsyncStorage.setItem('auth', JSON.stringify(res.data));

//           setIsLoading(false);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <SectionComponent>
//       <TextComponent
//         styles={{textAlign: 'center'}}
//         text="OR"
//         color={appColors.gray4}
//         size={16}
//         font={fontFamilies.medium}
//       />
//       <SpaceComponent height={16} />

//       <ButtonComponent
//         type="primary"
//         onPress={handleLoginWithGoogle}
//         color={appColors.white}
//         textColor={appColors.text}
//         text="Login with Google"
//         textFont={fontFamilies.regular}
//         iconFlex="left"
//         icon={require('../../../assets/google.png')}
//       />

//       <LoadingModal visible={isLoading} />
//     </SectionComponent>
//   );
// };
const SocialLogin = () => {
  return (
    <SectionComponent>
      <Text
        style={{ textAlign: 'center', fontSize: 16 }}
        color={appColors.gray4}
      >
        OR
      </Text>
      <SpaceComponent height={16} />
      <ButtonComponent type='primary' text="Login with Google " />
      {/* <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        iconFlex="left"
        icon={require('../../../assets/google.png')}
      /> */}
    </SectionComponent>
  )
}

export default SocialLogin

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#00629D',
    bottom: -12,
    marginLeft: 24,
    marginRight: 24,
  },
})
