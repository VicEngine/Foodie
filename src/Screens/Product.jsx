import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Bagg2 from '../components/Bagg2'
import Location from '../components/Location'
import { useNavigation } from '@react-navigation/native'
import Bggtop from '../components/Bggtop'
import Addressbot from '../components/Addressbot'
import Back from '../components/Back'
const Product = () => {
    const navigation = useNavigation();
    const Data = [
        {
            id: '1',
            image: require('../assets/images/pic6.png'),
            title: 'Chai tang\nRestaurant'
        },
        {
            id: '2',
            image: require('../assets/images/Pizza.png'),
            title: 'Dominos Pizza'
        },
        {
            id: '3',
            image: require('../assets/images/Kfc.png'),
            title: 'KFC'
        },
        {
            id: '4',
            image: require('../assets/images/Burger.png'),
            title: 'Buger King'
        },
    ]

    const Burger = [
        {
            id: '1',
            image: require('../assets/images/food1.png'),
            title: 'Special Fried Rice with \n  Black Beans Sauce',
            price: '#24,000'
        },
        {
            id: '2',
            image: require('../assets/images/food2.png'),
            title: 'Thaiwan',
            price: '#20,000'
        },

    ]
    const junks = ({ item }) => (
        <View style={styles.step2}>
            <Image source={item.image} />
            <Text style={styles.title1}>{item.title}</Text>
        </View>
    )
    const food = ({ item }) => (
        <View style={styles.step3}>
            <Text style={styles.title2}>{item.title}</Text>
            <Image source={item.image} style={styles.food} />
            <Text style={styles.title3}>{item.price}</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.step4}>
                <Image source={require('../assets/images/cross.png')} />
            </TouchableOpacity>
        </View>
    )
    return (
        <View style={styles.container}>
            <ScrollView>
                
            <View style={styles.step1}>
                <Bagg2 />
                <Bggtop />
                <Text style={styles.title}>Bringing Food to Your Doorstep</Text>
                <Addressbot onPress={() => navigation.navigate('Deliveryaddress')} />
                <Location textStyles={{ color: '#fff' }} />
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={junks}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <FlatList
                    data={Burger}
                    renderItem={food}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.backWrapper}>
                <Back style={styles.back} onPress={() => navigation.goBack()} />
            </View>
                <Image source={require('../assets/images/stor.png')} style={styles.step5} />
            <View>
                <Image source={require('../assets/images/pic12.png')}/>
           <Text>Chicken Republic</Text>
           <Image source={require('../assets/icons/like.gif')}/>
           <Text>95%</Text>
            </View>
            
            </ScrollView>
        </View>
    )
}



export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    step1: {
        width: '100%',
        height: 420,
        backgroundColor: '#B72245',
        borderBottomRightRadius: '48%',
        borderBottomLeftRadius: '48%',
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
        marginTop: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title1: {
        fontSize: 13,
        color: '#1F1F1F',
        fontWeight: '600',
        fontFamily: 'Inter',
        marginTop: 8,
        textAlign: 'center',
    },
    step3: {
        backgroundColor: '#B72245',
        width: 210,
        height: 280,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 15,
        marginLeft: 55,
        marginTop: 20
    },
    title2: {
        marginTop: 20,
        marginLeft: 25,
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: "Inter"
    },
    food: {
        position: 'absolute',
        left: -30,
        bottom: 50
    },
    title3: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontSize: 14
    },
    step4: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 10,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backWrapper: {
        marginTop: 12,
        alignSelf: 'flex-start',
    },
    back: {
        position: 'absolute',
        left: 15,
        top: 0,
    },
    step5:{
        marginTop:30,
        marginLeft:20
    },
})