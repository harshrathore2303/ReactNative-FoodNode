import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed';
import Iconicons from 'react-native-vector-icons/Ionicons'
import CustomBox from '../../components/CustomBox/CustomBox';
const {height, width} = Dimensions.get('window');


const RestaurantScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.userDetail}>
            <Image source={require('../../assets/inUse/restaurant.jpg')} style={styles.userProfile}/>
            <View style={styles.userName}>
                <Text style={{color: '#000000', fontSize: 20, fontWeight: '700'}}>Hi, Harish</Text>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 16}}>Let's make a good deal</Text>
            </View>
            <Iconicons name='notifications' size={25} color='white' style={{paddingRight: 20}}/>
        </View>
        
        <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <CustomBox title="Add Dish" emoji="+"/>
                <CustomBox title="Add offers" emoji="🎉"/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', height: height * 0.5}}>
                <CustomBox title="Latest Orders" emoji="📝"/>
                <CustomBox title="New Pickups" emoji="🍕"/>
            </View>
        </View>

        <View>
            <Text>Reviews</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    userDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e5293e',
        borderRadius: 90,
        justifyContent: 'space-between'
    },
    userProfile: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white'
    },
    userName: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    }

})

export default RestaurantScreen