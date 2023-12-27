import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../utils/color'

interface Props {
    children: React.ReactNode
    bg?: boolean
}

export default function Wrapper({ children, bg = false }: Props) {
    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: bg ? COLORS.splash : COLORS.white

        }]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})