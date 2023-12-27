import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Size } from '../../constant/size'
import { COLORS } from '../../utils/color'

interface Props {
    onPress: Function,
    bg?: boolean,
    title: string
}

export default function ButtonWithBg({ onPress, bg = false, title }: Props) {
    return (
        <Pressable onPress={() => onPress()}>
            <View style={{
                width: Size.RPWidth(90),
                backgroundColor: bg ? COLORS.black : COLORS.white,
                padding: Size.RPHeight(1.5),
                borderRadius: 5,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: bg ? COLORS.white : COLORS.black, fontWeight: 'bold',
                    fontSize: Size.RPFont(2)
                }}>{title}</Text>
            </View>
        </Pressable>
    )
}