import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import Entypo from 'react-native-vector-icons/Entypo'

const Login = () => {



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/inUse/login.png')} style={styles.bg}>
        <View style={styles.innerContainer}>
          
          <View>
            <Text style={styles.txt}>Welcome to foodnode</Text>
          </View>
          
          <View style={styles.btnContainer}>
            <Image source={require('../../assets/inUse/Group.png')}/>
            <CustomBtn title='LOGIN' backgroundColor="white" onPress={()=>{console.log("UserLogin")}}/>
            <CustomBtn title='RESTAURANT LOGIN' backgroundColor="white" onPress={()=>{console.log("RestaurantLogin")}}/>
          </View>

          <View style={{alignSelf: 'flex-start',}}>
              <Text style={styles.signupText}>create account</Text>
              <TouchableOpacity style={styles.signUpBtn}>
                <Text style={styles.signUpBtnText}>SIGN UP</Text>
                <Entypo name="chevron-thin-right" size={20} color="#ffffff" />
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}


export default Login