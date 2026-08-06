import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Bagg2 from '../components/Bagg2'
import Location from '../components/Location'
import { useNavigation } from '@react-navigation/native'

const Product = () => {
    const navigation = useNavigation();

    const Data = [
        {
            id: '1',
            image: require('../assets/images/pic6.png'),
            title: 'Chai Tang Restaurant'
        },
        {
            id: '2',
            image: require('../assets/images/pic8.png'),
            title: 'Chai Tang Restaurant'
        },
        {
            id: '3',
            image: require('../assets/images/pic7.png'),
            title: 'Chai Tang Restaurant'
        },
        {
            id: '4',
            image: require('../assets/images/pic9.png'),
            title: 'Chai Tang Restaurant'
        },
    ]

    const bog = ({ item }) => (
        <View style={styles.step4}>
            <Image source={item.image} style={styles.pic6} />
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.minorCon}>
                <Bagg2 />
                <Image source={require('../assets/images/bbg3.png')} style={styles.bbg} />
                <Text style={styles.title}>Bringing Food to Your Doorstep</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Deliveryaddress')} style={styles.step2}>
                    <View style={styles.step2Sub} />
                    <View style={styles.step2Sub1} />
                    <Text style={styles.title1}>whats your address?</Text>
                </TouchableOpacity>

                <Location textStyles={{ color: '#fff' }} />

                <View style={styles.listContainer}>
                    {/* FlatList nested directly inside ImageBackground */}
                    <ImageBackground 
                        source={require('../assets/images/bgg4.png')} 
                        style={styles.step3}
                        resizeMode="cover"
                    >
                        <FlatList
                            data={Data}
                            renderItem={bog}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContent}
                        />
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#ffffff',
        backgroundColor: '#B72245',
        flex: 1
    },
    minorCon: {
        height: '100%',
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
        fontWeight: '500',
        fontSize: 14,
        color: '#555252'
    },
    listContainer: {
        marginTop: -50,
    },
    step3: {
        width: '100%',
        height: '94%', // Fixed height for background image area
        // paddingTop: 15, // Distance from top edge of the background image
    },
    flatListContent: {
        paddingHorizontal: 15,
    },
    step4: {
        alignItems: 'center',
        position:"relative",
        top:170
    },
    pic6: {
        width: 71,
        height: 53,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    itemTitle: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 6,
    }
})