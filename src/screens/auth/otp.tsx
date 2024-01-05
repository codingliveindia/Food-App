import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { ButtonWithBg, Wrapper } from '../../components'
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from '../../utils/color';
import { Size } from '../../constant/size';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import OTPTimer from '../../components/otp/timer';

interface Props {
    navigation: NavigationProp<any, any>
    route: RouteProp<any, any>
}

export default function Otp({ navigation, route }: Props) {
    const [OtpErr, setOtpErr] = useState(false)
    const [otpcode, setotpcode] = useState<any>()
    const [resend, setresend] = useState(false)
    const [resendEnable, setresendEnable] = useState(false)


    const getTimer = () => {
        console.log("timer completed")
        setresendEnable(true)
    }

    const storeTimer = (time: number) => { }


    const resentOtp = () => {
        if (resendEnable) {
            setresend(!resend)
            setresendEnable(false)
        }
    }

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
                            <Pressable
                                disabled={!resendEnable}
                                onPress={resentOtp}>
                                <Text style={{ color: resendEnable ? COLORS.green : COLORS.darkGrey }}>
                                    {" "}Resend
                                </Text>
                            </Pressable>
                        </View>
                        <OTPTimer
                            getTime={getTimer}
                            initialTime={10}
                            restart={resend}
                            storeTimer={storeTimer}
                        />

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
        justifyContent: 'space-between',
        marginVertical: Platform.OS == "ios" ? 0 : Size.RPFont(2)
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