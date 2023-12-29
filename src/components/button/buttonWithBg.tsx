import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Size } from '../../constant/size'
import { COLORS } from '../../utils/color'

interface Props {
    onPress: Function,
    bg?: String,
    txtBg?: String
    title: string
}

export default function ButtonWithBg({ onPress, bg = COLORS.black, txtBg = COLORS.white, title }: Props) {
    return (
        <Pressable onPress={() => onPress()}>
            <View style={{
                width: Size.RPWidth(90),
                backgroundColor: bg,
                padding: Size.RPHeight(1.5),
                borderRadius: 5,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: txtBg, fontWeight: 'bold',
                    fontSize: Size.RPFont(2)
                }}>{title}</Text>
            </View>
        </Pressable>
    )
}
