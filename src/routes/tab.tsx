import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Splash from '../screens/splash';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeTab" component={Home} />
            <Tab.Screen name="SplashTab" component={Splash} />
        </Tab.Navigator>
    );
}