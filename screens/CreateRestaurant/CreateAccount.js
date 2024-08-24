import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, KeyboardAvoidingView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import Video from 'react-native-video'
import { BlurView } from '@react-native-community/blur'
import { Image } from '@rneui/base'

const CreateRestaurant = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Video
                source={require('../../assets/video/video.mp4')}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode="cover" />
            <BlurView
                style={styles.absolute}
                blurType="thinMaterialDark"
                blurAmount={10}
                // reducedTransparencyFallbackColor="gray"
            />
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.profile}>
                    <Image source={require('../../assets/inUse/restaurant.jpg')} style={styles.profilePhoto}/>
                    <Text style={{color: '#dcd8cb'}}>Add Profile</Text>
                </TouchableOpacity>
                {/* <Text style={styles.text}>Hello, Background Video!</Text> */}
                <View>
                    <TextInput/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcd8cb'
    },
    backgroundVideo: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    absolute: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 15,
        borderWidth: 2,
        alignItems: 'center'
    },
    profile: {
        width: '100%',
        backgroundColor: 'plum',
        alignItems: 'center',
    },
    profilePhoto: {
        height: 80,
        width: 80,
        aspectRatio: 1/1,
        borderRadius: 50
    }
})

export default CreateRestaurant