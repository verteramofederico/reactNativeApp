import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdvisesScreen from '../screens/AdvisesScreen'
import ContactScreen from '../screens/ContactScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='AdvisesScreen' component={AdvisesScreen} />
            <Stack.Screen name='ContactScreen' component={ContactScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigator