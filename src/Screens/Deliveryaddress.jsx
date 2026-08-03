import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native'
import Back from '../components/Back'
const Deliveryaddress = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cut}>
                    <Image source={require('../assets/icons/cut.png')} />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Add a delivery address
                </Text>
                <View style={styles.step1}>
                    <SimpleLineIcons name="flag" size={24} color="black" />
                    <TextInput
                        placeholder='Search for streets, cities, districts.'
                        placeholderTextColor={'#555252'}
                    />
                </View>
                <View style={styles.step2}>
                    <View style={styles.step2Sub}>
                        <Image source={require('../assets/icons/Star1.png')} style={styles.Star1} />
                    </View>
                    <Text style={styles.title1}>
                        Use current location
                    </Text>
                </View>

                <View style={styles.step3Con}>
                    <View style={styles.step3}>
                        <Back  onPress={() => navigation.goBack()} />
                        <Text style={styles.title2}> or set your location on the map</Text>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Deliveryaddress

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 20
    },
    cut: {
        position: 'absolute',
        right: 20,
        top: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: "#000000",
        textAlign: "center",
        marginTop: 20,
    },
    step1: {
        borderBottomWidth: 2,
        borderBottomColor: '#c6c1c1',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
        elevation: 2,
        shadowOpacity: 0.25,
    },
    step2: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    step2Sub: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#baf4d9"
    },
    title1: {
        fontSize: 16,
        fontWeight: 'medium',
        fontFamily: 'Inter',
        color: '#045a31'
    },
    Star1: {
        tintColor: '#045a31',
    },
    step3Con: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    step3: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    title2: {
        marginLeft: 58,
        color: '#045a31',
        fontSize: 16,
        fontWeight: 'medium',
        fontFamily: 'Inter',
    },
})