import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Bagg2 from '../components/Bagg2'
import Location from '../components/Location'
import { useNavigation } from '@react-navigation/native'
const Product = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Bagg2 />
            <Image source={require('../assets/images/bbg3.png')} style={styles.bbg} />
            <Text style={styles.title}>Bringing Food to Your Doorstep</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('Deliveryaddress')} style={styles.step2}>
                <View style={styles.step2Sub}>
                </View>
                <View style={styles.step2Sub1} />
                <Text style={styles.title1}>whats your address?</Text>
            </TouchableOpacity>
            <Location textStyles={{ color: '#fff' }} />
            <ImageBackground  resizeMode='cover' source={require('../assets/images/bgg4.png')} style={styles.step3}>
              

                
                    <Image source={require('../assets/images/pic6.png')} style={styles.pic6} />
                
            </ImageBackground>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        height: '70%',
        backgroundColor: '#B72245'
    },
    bbg: {
        position: 'absolute',
        right: 50,
        top: 35,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: "#FFFDFD",
        textAlign: "center",
        marginTop: 20,
    },
    step2: {
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: '#F7931E',
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        gap: 30,
        backgroundColor: "#FFFDFD",
        marginTop: 30,
    },
    step2Sub: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#F7931E"
    },
    step2Sub1: {
        height: 30,
        borderWidth: 1,
        borderColor: "#F7931E",
        flexDirection: 'column-reverse'
    },
    title1: {
        fontFamily: 'Inter',
        fontWeight: 'medium',
        fontSize: 14,
        color: '#555252'
    },
    step3: {
flex: 1,

    },
    pic6:{
        resizeMode: 'contain',
    },
})