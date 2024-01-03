import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ButtonWithBg, Wrapper } from '../../components'
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from '../../utils/color';
import { Size } from '../../constant/size';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

interface Props {
    navigation: NavigationProp<any, any>
    route: RouteProp<any, any>
}

export default function Otp({ navigation, route }: Props) {
    const [OtpErr, setOtpErr] = useState(false)
    const [otpcode, setotpcode] = useState<any>()

    return (
        <Wrapper>
            <View style={styles.conatiner}>
                <View>
                    {/*  header */}
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={{ marginHorizontal: Size.RPFont(2) }}>
                        <AntDesign name="arrowleft"
                            color={COLORS.black}
                            size={Size.RPFont(3)}
                        />
                    </Pressable>

                    {/* Discription */}
                    <View style={{ margin: Size.RPFont(2) }}>
                        <Text style={{
                            fontSize: Size.small,
                            fontWeight: "600"
                        }}>Verify your details</Text>
                        <View style={{
                            marginVertical: Size.RPFont(1),
                            flexDirection: 'row', alignItems: 'center'
                        }}>
                            <Text style={{ color: COLORS.darkGrey }}>Enter OTP sent to </Text>
                            <Text>+{route?.params?.country_code} {route?.params?.phone_number} </Text>
                            <Text style={{ color: COLORS.darkGrey }}>via sms</Text>
                        </View>
                    </View>

                    {/* //otp  */}
                    <View style={{ marginHorizontal: Size.RPFont(2) }}>
                        <Text>Enter OTP</Text>
                        <OTPInputView
                            style={{ width: Size.RPWidth(70), height: 80, }}
                            pinCount={4}
                            keyboardType='number-pad'
                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            onCodeChanged={code => setotpcode(code)}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                                setOtpErr(true)
                            })}
                        />

                    </View>

                    {/* otp timer */}
                    <View style={{
                        marginHorizontal: Size.RPFont(2),
                        width: Size.RPWidth(70),
                        justifyContent: 'space-between',
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center'
                        }}>
                            <Text>
                                Didn't recive OTP?
                            </Text>
                            <Text style={{ color: COLORS.green }}>
                                {" "}Resend
                            </Text>
                        </View>
                        <Text>00.28</Text>

                    </View>

                </View>

                {/* // bottom buttom */}

                <View style={{ alignItems: 'center' }}>
                    <ButtonWithBg title='Verify & continue'
                        bg={OtpErr ? COLORS.black : COLORS.darkGrey}
                        txtBg={OtpErr ? COLORS.white : COLORS.white}
                        disabled={OtpErr ? false : true}
                        onPress={() => { }} />
                </View>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'space-between'
    },
    underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 7,
        color: COLORS.black
    },
    underlineStyleHighLighted: {
        borderColor: COLORS.black,
    },
})