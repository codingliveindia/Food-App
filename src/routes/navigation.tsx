import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splash from '../screens/splash';
import Tabs from './tab';
import Onboading from '../screens/onboarding/onboading';
import PhoneLogin from '../screens/auth/Phonelogin';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
                <Stack.Screen name="Onboading" component={Onboading} />
                <Stack.Screen name="Home" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}