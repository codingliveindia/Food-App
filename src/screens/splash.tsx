import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { NavigationProp } from '@react-navigation/native';
import { Wrapper } from '../components';
import { logo } from '../assets/images';
import { Size } from '../constant/size';

interface Props {
    navigation: NavigationProp<any, any>
}

export default function Splash({ navigation }: Props) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Onboading")
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [])



    return (
        <Wrapper bg={true}>
            <View style={styles.container}>
                <Image source={logo} style={styles.img} />
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: Size.RPWidth(40),
        height: Size.RPHeight(40),
        resizeMode: "contain"
    }
})