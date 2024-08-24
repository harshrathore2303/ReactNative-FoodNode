import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

const RestaurantLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/inUse/login.png')} style={styles.bg}>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.txt}>Welcome to foodnode</Text>
                </View>
                
                <View style={styles.innerInput}>
                    <TextInput style={styles.input} placeholder='username' autoCapitalize='none' placeholderTextColor="gray"/>
                    <TextInput style={styles.input} placeholder='password' autoCapitalize='none' placeholderTextColor="gray"/>
                </View>
                <CustomBtn title="LOGIN" backgroundColor="white"/>
                <CustomBtn title="CREATE ACCOUNT" backgroundColor="#e5293e" color="white"/>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        paddingHorizontal: 15,

        // backgroundColor: 'red'
    },
    input: {
        borderWidth: 2,
        borderColor: '#e5293e',
        marginVertical: 20,
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 30,
        paddingHorizontal: 20 
    },
    innerInput: {
        width: '100%',
        // flex: 1,
        // justifyContent: 'center'
        marginTop: '50%'
    }
})

export default RestaurantLogin