import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Iconicons from 'react-native-vector-icons/Ionicons'
import Emoji from 'react-native-emoji';

const {height, width} = Dimensions.get('window');
const CustomBox = ({title, emoji}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
            <Text style={{fontSize: 40, color: 'white'}}>{emoji}</Text>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5293e',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.2,
        width: width * 0.4,
        borderRadius: 20,
        elevation: 20,
    }
})

export default CustomBox