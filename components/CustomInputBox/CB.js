import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CB = ({children, sty}) => {
  return (
    <View style={[styles.box, sty]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: '#EF3E4A',
        borderRadius: 10,
        backgroundColor: '#dcd8cb',
        borderCurve: 'continuous',
        marginVertical: 20,
        width: '100%'
    },
})

export default CB