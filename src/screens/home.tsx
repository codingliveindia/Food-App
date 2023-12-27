import { View, Text, Touchable, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { setData } from '../redux/slice/homeSlice'

export default function Home() {
    const { data } = useSelector((state: any) => state.home)
    console.log(data)
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Text>{data}</Text>

            <Pressable style={{ padding: 10, backgroundColor: 'red' }} onPress={() => {
                dispatch(setData(data + 1))
            }}>
                <Text>Change state</Text>
            </Pressable>
        </SafeAreaView >
    )
}