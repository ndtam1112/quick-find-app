import { Button, Flex, Stack } from '@react-native-material/core'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  btn_load: {
    backgroundColor: 'transparent',
  },
})
const SignUp_3 = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Stack
      fill
      center
      style={{ backgroundColor: '#00629D', height: '100%', display: 'flex' }}
    >
      <Button
        style={styles.btn_load}
        disabled
        title="Button"
        loading={loading}
        loadingIndicatorPosition="overlay"
      />
    </Stack>
  )
}

export default SignUp_3
