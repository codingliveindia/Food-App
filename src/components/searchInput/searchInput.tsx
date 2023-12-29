import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from '../../utils/color';
import { Size } from '../../constant/size';

interface Props {
    input: any,
    setinput: Function
}

export default function SearchInput({ input, setinput }: Props) {
    return (
        <View style={{
            borderRadius: 10, flexDirection: 'row',
            alignItems: 'center',
            padding: Size.RPFont(1.5), backgroundColor: COLORS.inputColor
        }}>
            <Feather name='search' color={COLORS.black} size={25} />
            <TextInput placeholder='search'
                value={input}
                onChangeText={(e) => setinput(e)}
                placeholderTextColor={COLORS.darkGrey}
                style={{ marginLeft: 10, fontSize: Size.RPFont(2) }} />
        </View>
    )
}