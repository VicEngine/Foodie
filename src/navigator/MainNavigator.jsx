import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landingpage from '../Screens/Landingpage';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Landingpage' component={Landingpage} />
        </Stack.Navigator>
    )
}

export default MainNavigator