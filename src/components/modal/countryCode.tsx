import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Size } from '../../constant/size'
import { COLORS } from '../../utils/color'
import SearchInput from '../searchInput/searchInput'
import { countryCode } from '../../json/country'

interface Props {
    closeModal: Function
}


export default function CountryCode({ closeModal }: Props) {

    const [sortCoutryCode, setsortCoutryCode] = useState(countryCode)
    const [search, setsearch] = useState("")

    React.useEffect(() => {
        sortCoutryCodeData()
    }, [])

    const sortCoutryCodeData = () => {
        sortCoutryCode.sort((a, b) => a.Name.localeCompare(b.Name))
        setsortCoutryCode(sortCoutryCode)
    }

    const getInput = (data: any) => {
        setsearch(data)
        const regex = new RegExp(data, "i")
        const searchData = countryCode.filter(country => regex.test(country.Name))
        if (searchData.length > 0) {
            setsortCoutryCode(searchData)
        }
        else {
            setsortCoutryCode([])
        }
    }



    const renderCountryData = ({ item }: any) => {
        return (
            <>
                <Pressable
                    onPress={() => closeModal(item)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: Size.RPFont(5) }}>{item.Unicode}</Text>
                    <Text style={{ marginLeft: Size.RPFont(1) }}>{item.Name}</Text>
                </Pressable>
                <View style={{
                    marginTop: Size.RPFont(1), borderWidth: 0.5,
                    borderColor: COLORS.lightGrey
                }} />
            </>
        )
    }

    return (
        <View style={{ flex: 0.7, backgroundColor: COLORS.white, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
            <View style={{ margin: Size.RPFont(2) }}>
                <Text style={{ textAlign: 'center', fontSize: Size.small }}>Select Country</Text>
                <View style={{ marginVertical: Size.RPFont(2) }}>
                    <SearchInput input={search} setinput={getInput} />
                </View>
                <FlatList
                    data={sortCoutryCode}
                    keyExtractor={(item: any) => item.Name}
                    renderItem={renderCountryData}
                />
            </View>
        </View>
    )
}