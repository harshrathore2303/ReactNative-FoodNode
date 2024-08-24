import { StyleSheet } from 'react-native'
import React from 'react'

export 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  txt: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700'
  },
  innerContainer: {
    margin: 15,
    alignItems:'center', 
    flex: 1, 
    width: '90%', 
    paddingHorizontal: 15
  },
  btnContainer: {
    alignItems: 'center', 
    width: '90%', 
    flex: 1, 
    justifyContent: 'center',
  },
  signupText: {
    color: '#ffffff', 
    fontWeight: '700', 
    fontSize: 28, 
    marginBottom: 5,
  },
  signUpBtn:{
    flexDirection: 'row', 
    backgroundColor: '#e5293e', 
    padding: 5, 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    borderRadius: 20, 
    width: '50%', 
    height: 35, 
  },
  signUpBtnText: {
    color: '#ffffff', 
    fontWeight: '700', 
    fontSize: 14,
  }
})
