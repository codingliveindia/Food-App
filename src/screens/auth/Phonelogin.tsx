import { View, Text, Image, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ButtonWithBg, Wrapper } from '../../components'
import { login } from '../../assets/images'
import { Size } from '../../constant/size'
import { COLORS } from '../../utils/color'
import Ant from "react-native-vector-icons/AntDesign";
import ReactNativeModal from 'react-native-modal'
import CountryCode from '../../components/modal/countryCode'
import { NavigationProp } from '@react-navigation/native'

interface Props {
    navigation: NavigationProp<any, any>
}

export default function PhoneLogin({ navigation }: Props) {
    const [isVisible, setisVisible] = React.useState(false)
    const [countryData, setcountryData] = React.useState<any>(null)
    const [phoneNumber, setphoneNumber] = useState<any>(null)
    const [phoneNumberErr, setphoneNumberErr] = useState("phone number is required")


    const closeModal = (data?: any) => {
        if (data) {
            setcountryData(data)
        }
        setisVisible(false)
    }

    const checkValiation = (data: any) => {
        if (data) {
            if (data.length >= 7) {
                setphoneNumberErr("")
                setphoneNumber(data)
            } else {
                setphoneNumberErr("phone number is invalid")
            }

        }
        else {
            setphoneNumberErr("phone number is required")
        }
    }



    const submit = () => {
        console.log("passed")
        navigation.navigate("Otp", {
            phone_number: phoneNumber,
            country_code: countryData ? countryData?.Dial : "91"
        })

    }

    return (
        <Wrapper>
            <View style={styles.conatiner}>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={login} style={styles.img} />
                    </View>
                    <View style={{ margin: Size.RPFont(2) }}>
                        <Text style={styles.heading}>
                            Get started with App</Text>
                        <Text style={styles.subheading}>login or singup to use app</Text>
                        <Text style={styles.txt}>Enter phone number</Text>

                        <View style={{ flexDirection: 'row', marginVertical: Size.RPFont(1), alignItems: 'center' }}>

                            <Pressable
                                onPress={() => setisVisible(true)}
                                style={{
                                    width: Size.RPWidth(20), borderWidth: 1,
                                    padding: Size.RPFont(1.5), borderRadius: 5,
                                    borderColor: COLORS.lightGrey, flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                <Text style={{ fontSize: Size.RPFont(2) }}>{countryData ? countryData?.Unicode : "🇮🇳"}</Text>
                                <Ant name='down' color={COLORS.black} size={Size.RPFont(2)} style={{ marginLeft: 5 }} />

                            </Pressable>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                marginLeft: Size.RPFont(1), width: Size.RPWidth(70),
                                borderWidth: 1, padding: Size.RPFont(1.5),

                                borderColor: COLORS.lightGrey, borderRadius: 5
                            }}>
                                <Text>+{countryData ? countryData?.Dial : "91"}</Text>
                                <TextInput
                                    onChangeText={(e) => checkValiation(e)}
                                    keyboardType='number-pad' maxLength={13}
                                    style={{ marginLeft: Size.RPFont(1) }} placeholder='00000 00000' />
                            </View>
                        </View>


                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <ButtonWithBg title='Continue'
                        bg={phoneNumberErr == "" ? COLORS.black : COLORS.darkGrey}
                        txtBg={phoneNumberErr == "" ? COLORS.white : COLORS.white}
                        disabled={phoneNumberErr == "" ? false : true}
                        onPress={submit} />
                    <View style={{ flexDirection: 'row', marginVertical: Size.RPFont(2) }}>
                        <Text style={styles.note}>By clicking, I accept the </Text>
                        <Text style={[styles.note, { color: COLORS.black }]}>Terms & Condition</Text>
                        <Text style={styles.note}> & </Text>
                        <Text style={[styles.note, { color: COLORS.black }]}>Privacy Policy </Text>
                    </View>
                </View>

            </View>
            <ReactNativeModal onBackButtonPress={() => closeModal()}
                isVisible={isVisible}
                onBackdropPress={() => closeModal()}
                style={{ margin: 0, justifyContent: 'flex-end' }}>
                <CountryCode closeModal={closeModal} />

            </ReactNativeModal>

        </Wrapper>
    )
}

const styles = StyleSheet.create({
    conatiner: { flex: 1, justifyContent: 'space-between' },
    img: { width: Size.RPWidth(80), height: Size.RPHeight(30) },
    heading: { fontWeight: '600', fontSize: Size.small },
    subheading: { marginTop: Size.RPFont(0.5), color: COLORS.darkGrey },
    txt: { fontWeight: "600", marginVertical: Size.RPFont(1), marginTop: Size.RPFont(2) },
    note: { fontSize: Size.RPFont(1.5), color: COLORS.darkGrey }
})