import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Bgg from '../components/Bgg'

const Signup = () => {
    return (
        <View style={styles.container}>
            <Bgg />
            <Image source={require('../assets/images/bbg3.png')} style={styles.step1} />
            <TouchableOpacity style={styles.step2}>
                <View style={styles.step2Sub}>
                </View>
                <View style={styles.step2Sub1} />
                <Text style={styles.title}>whats your address?</Text>
            </TouchableOpacity>
            <View style={styles.step3Con}>
                <View style={styles.step3}>
                    <Image source={require('../assets/icons/Star1.png')} />
                </View>
                <Text style={styles.title2}>
                    Use current location
                </Text>
            </View>
            <View style={styles.step4}>
                <View style={styles.step5Con}>
                    <View style={styles.step5}>
                        <Text style={styles.title3}>
                            Welcome
                        </Text>

                        <View style={styles.step6Con}>
                            <Text>
                                Account Already
                            </Text>
                            <View style={styles.step6Line} />
                            <Text>
                                Login
                            </Text>
                        </View>
                    </View>

                    <View style={styles.step7Con}>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    step1: {
        alignSelf: 'center',
        transform: [{
            translateY: -45
        }]
    },
    step2: {
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: '#B72245',
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        gap: 30
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
    title: {
        fontFamily: 'Inter',
        fontWeight: 'medium',
        fontSize: 14,
        color: '#555252'
    },
    step3Con: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        gap: 15
    },
    step3: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#B72245",
        alignItems: "center",
        justifyContent: 'center'
    },
    title2: {
        fontFamily: 'Inter',
        color: "#b72245",
        fontSize: 14,
        fontWeight: 'medium'
    },
    step4: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#CAC5C5'
    },
    step5Con: {
        padding: 25
    },
    step5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    title3: {
        fontSize: 25,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: "#000000"
    },
    step6Con: {
        flexDirection: 'row',
        gap: 10
    },
    step6Line: {
        height: 20,
        borderWidth: 0.5,
        borderColor: '#000000'
    },
    step7Con:{
        width:'100%',
        height:60,
        backgroundColor:'#FFFAFA',
        elevation:3,
        shadowOpacity:0.3,
        marginTop:30,
        borderRadius:20,
        alignSelf:"center",
        shadowOffset:0.5,
    },
})