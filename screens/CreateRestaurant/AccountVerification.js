import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import CB from '../../components/CustomInputBox/CB'
import Video from 'react-native-video'
import { BlurView } from '@react-native-community/blur'


const AccountVerification = () => {
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
        <CB sty={{}}>
          <TextInput placeholder=''/>
        </CB>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 15,
    // borderWidth: 2,
    alignItems: 'center'
  },

})

export default AccountVerification