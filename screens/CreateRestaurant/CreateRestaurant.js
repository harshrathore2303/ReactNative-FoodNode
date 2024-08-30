import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, KeyboardAvoidingView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import Video from 'react-native-video'
import { BlurView } from '@react-native-community/blur'
import { Image } from '@rneui/base'
import DateTimePicker from '@react-native-community/datetimepicker';
import Fontisto from 'react-native-vector-icons/Fontisto'

const CreateRestaurant = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };
    // console.log(date.toDateString())
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
                {/* <Text style={styles.text}>Hello, Background Video!</Text> */}
                {/* Restaurant name */}
                <View style={styles.box}>
                    <TextInput placeholder='Restaurant Name' style={styles.input} />
                </View>
                {/* phone number */}
                <View style={styles.box}>
                    <TextInput placeholder='Phone Number' style={styles.input} />
                </View>
                {/* email */}
                <View style={styles.box}>
                    <TextInput placeholder='Email' style={styles.input} />
                </View>
                {/* username */}
                <View style={styles.box}>
                    <TextInput placeholder='Username' style={styles.input} />
                </View>
                {/* password */}
                <View style={styles.box}>
                    <TextInput placeholder='Password' style={styles.input} />
                </View>

                {/* aniversery date*/}
                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={[styles.box, { width: '50%', alignItems: 'center' }]}>
                        <Text style={{ color: 'black', padding: 10 }}>{date.toDateString()}</Text>
                    </View>
                    <TouchableOpacity style={{ padding: 5 }} onPress={() => setShow(true)}>
                        <Fontisto name='date' size={30} color='#EF3E4A' />
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <CustomBtn title='NEXT' onPress={()=> {}}backgroundColor='#dcd8cb'/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#dcd8cb'
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
    box: {
        borderWidth: 1,
        borderColor: '#EF3E4A',
        borderRadius: 10,
        backgroundColor: '#dcd8cb',
        borderCurve: 'continuous',
        marginVertical: 20,
        width: '100%'
    },
    input: {
        color: '#EF3E4A',
        paddingHorizontal: 10
    },
})

export default CreateRestaurant