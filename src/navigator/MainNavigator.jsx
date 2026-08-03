import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landingpage from '../Screens/Landingpage';
import Signup from '../Screens/Signup';
import Product from '../Screens/Product';
import Deliveryaddress from '../Screens/Deliveryaddress';
const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Landingpage' component={Landingpage} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='Deliveryaddress' component={Deliveryaddress} /> 
        </Stack.Navigator>
    )
}

export default MainNavigator