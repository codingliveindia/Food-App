import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { ButtonWithBg, Wrapper } from '../../components'
import { Size } from '../../constant/size'
import { COLORS } from '../../utils/color'
import { onboad1, onboad2, onboad3, onboad4 } from '../../assets/images'

export default function Onboading() {
    const [timeline, settimeline] = useState(0)
    const TimlineImage = () => {
        let data: any

        switch (timeline) {
            case 0:
                data = {
                    image: onboad1,
                    txt: "Food delivery at door step"
                }

                break;
            case 1:
                data = {
                    image: onboad2,
                    txt: "Grocery & Essentials Delivery"
                }
                break;
            case 2:
                data = {
                    image: onboad3,
                    txt: "Dine Iniin fine resturants"
                }
                break;
            case 3:
                data = {
                    image: onboad4,
                    txt: "Get any packapes delivered"
                }
                break;


            default:
                data = {
                    image: onboad1,
                    txt: "Food delivery at door step"
                }
                break;
        }

        return data
    }

    const Next = () => {
        if (timeline < 3) {
            settimeline(timeline + 1)
        }
        else {
            console.log("next screen")
        }
    }

    const Skip = () => {
        console.log("next screen")
    }

    return (
        <Wrapper>
            <View style={style.constainer}>

                <View style={{ flex: 0.1, flexDirection: 'row', margin: Size.RPFont(1) }}>
                    <View style={[style.timeline, { backgroundColor: timeline == 0 ? COLORS.black : COLORS.grey }]} />
                    <View style={[style.timeline, { backgroundColor: timeline == 1 ? COLORS.black : COLORS.grey }]} />
                    <View style={[style.timeline, { backgroundColor: timeline == 2 ? COLORS.black : COLORS.grey }]} />
                    <View style={[style.timeline, { backgroundColor: timeline == 3 ? COLORS.black : COLORS.grey }]} />
                </View>

                <View style={{ flex: 0.5, }}>
                    <Image source={TimlineImage().image}
                        style={style.timelineimg} />
                </View>


                <View style={{ flex: 0.2, }}>
                    <Text style={{ fontSize: Size.small, fontWeight: 'bold' }}>
                        {TimlineImage().txt}
                    </Text>
                    <Text style={{
                        fontSize: Size.RPFont(2),
                        color: COLORS.grey
                        , padding: Size.RPFont(1),
                        textAlign: 'center'
                    }}>
                        Get yummy delicious food at your {"\n"}
                        services in with less time.
                    </Text>
                </View>
                <View style={{ flex: 0.2, }}>
                    <ButtonWithBg title='Next' bg={true} onPress={Next} />
                    <ButtonWithBg title='Skip' onPress={Skip} />
                </View>


            </View>
        </Wrapper>
    )
}

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
    },
    timeline: {
        backgroundColor: COLORS.grey,
        borderRadius: 10,
        height: Size.RPHeight(0.5),
        width: Size.RPWidth(20),
        margin: Size.RPFont(1)
    },
    timelineimg: {
        height: Size.RPHeight(40), width: Size.RPWidth(80)
    }
})