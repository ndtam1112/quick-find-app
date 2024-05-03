import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  iconbtn: {
    height: 30,
    width: 30,
    fontSize: 25,
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
    width: '80%',
    textAlign: 'center',
    letterSpacing: 0.9,
  },
  txinput: {
    width: '80%',
    color: '#111',
    borderBottomColor: '#485563',
  },
  btn: {
    backgroundColor: '#00629D',
    borderRadius: 60,
  },
  label: {
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 20,
    color: 'rgba(0,0,0,0.6)',
  },
})
