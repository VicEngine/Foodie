import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landingpage from '../Screens/Landingpage';
import Signup from '../Screens/Signup';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Landingpage' component={Landingpage} />
            <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
    )
}

export default MainNavigator