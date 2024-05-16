import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardType,
  StyleProp,
  ViewStyle,
} from 'react-native'
import React, { ReactNode, useState } from 'react'
import { appColors } from '../constants/appColors'
import { globalStyles } from '../styles/globalStyles'
import { Entypo, SimpleLineIcons } from '@expo/vector-icons'

interface Props {
  value: string
  onChange: (val: string) => void
  affix?: ReactNode
  placeholder?: string
  suffix?: ReactNode
  isPassword?: boolean
  allowClear?: boolean
  type?: KeyboardType
  onEnd?: () => void
  multiline?: boolean
  numberOfLine?: number
  styles?: StyleProp<ViewStyle>
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    affix,
    suffix,
    placeholder,
    isPassword,
    allowClear,
    type,
    multiline,
    numberOfLine,
    styles,
    onEnd,
  } = props

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false)

  return (
    <View style={[globalStyles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        style={[
          globalStyles.input,
          globalStyles.text,
          {
            paddingHorizontal: affix || suffix ? 12 : 0,
          },
        ]}
        multiline={multiline}
        value={value}
        numberOfLines={numberOfLine}
        placeholder={placeholder ?? ''}
        onChangeText={(val) => onChange(val)}
        secureTextEntry={isShowPass}
        placeholderTextColor={'#747688'}
        keyboardType={type ?? 'default'}
        autoCapitalize="none"
        onEndEditing={onEnd}
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }
      >
        {isPassword ? (
          <Entypo
            name={isShowPass ? 'eye-with-line' : 'eye'}
            size={22}
            color={appColors.gray}
          />
        ) : (
          value &&
          value.length > 0 &&
          allowClear && (
            <SimpleLineIcons name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
})
