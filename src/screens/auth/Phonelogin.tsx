import { View, Text, Image, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'
import { ButtonWithBg, Wrapper } from '../../components'
import { login } from '../../assets/images'
import { Size } from '../../constant/size'
import { COLORS } from '../../utils/color'
import Ant from "react-native-vector-icons/AntDesign";
import ReactNativeModal from 'react-native-modal'
import CountryCode from '../../components/modal/countryCode'

export default function PhoneLogin() {
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
                            <Pressable >
                                <View style={{
                                    width: Size.RPWidth(20), borderWidth: 1,
                                    padding: Size.RPFont(1.5), borderRadius: 5,
                                    borderColor: COLORS.lightGrey, flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ fontSize: Size.RPFont(2) }}>🇮🇳</Text>
                                    <Ant name='down' color={COLORS.black} size={Size.RPFont(2)} style={{ marginLeft: 5 }} />
                                </View>
                            </Pressable>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                marginLeft: Size.RPFont(1), width: Size.RPWidth(70),
                                borderWidth: 1, padding: Size.RPFont(1.5),
                                borderColor: COLORS.lightGrey, borderRadius: 5
                            }}>
                                <Text>+91</Text>
                                <TextInput placeholder='00000 00000' />
                            </View>
                        </View>


                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <ButtonWithBg title='Continue' bg={COLORS.darkGrey} txtBg={COLORS.white} onPress={() => { }} />
                    <View style={{ flexDirection: 'row', marginVertical: Size.RPFont(2) }}>
                        <Text style={styles.note}>By clicking, I accept the </Text>
                        <Text style={[styles.note, { color: COLORS.black }]}>Terms & Condition</Text>
                        <Text style={styles.note}> & </Text>
                        <Text style={[styles.note, { color: COLORS.black }]}>Privacy Policy </Text>
                    </View>
                </View>

            </View>
            <ReactNativeModal isVisible={true} style={{ margin: 0, justifyContent: 'flex-end' }}>
                <CountryCode />

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