import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomBtn = ({title, onPress, backgroundColor="white", color="black"}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: backgroundColor}]} onPress={onPress}>
        <Text style={[styles.text, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        borderRadius: 20,
        marginVertical: 15,
    },
    text: {
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 18.4,
        color: '#000000'
    }
})

export default CustomBtn