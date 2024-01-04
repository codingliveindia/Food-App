import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BackgroundTimer from 'react-native-background-timer';
interface Props {
    initialTime: number
    getTime: Function
    restart: boolean
    storeTimer: Function
}

export default function OTPTimer({ getTime, initialTime, restart, storeTimer }: Props) {

    const [counter, setcounter] = useState(initialTime)



    React.useEffect(() => {
        const intervalId = BackgroundTimer.setInterval(() => {
            setcounter((prevTime): any => {
                if (prevTime == 0) {
                    BackgroundTimer.clearInterval(intervalId)
                }
                return prevTime - 1
            })
        }, 1000)
        return () => {
            BackgroundTimer.clearInterval(intervalId)
        }
    }, [restart])


    React.useEffect(() => {
        setcounter(initialTime)
    }, [restart])


    React.useEffect(() => {
        storeTimer(counter)
        if (counter == 0) {
            getTime(counter)
        }
    }, [counter])


    const clockify = () => {
        let mins = -Math.floor((counter / 60) % 60)
        let seconds = Math.floor(counter % 60)
        let displayMins = mins < 10 ? `0${mins}` : mins
        let displaySecs = seconds < 10 ? `0${seconds}` : seconds
        return {
            displayMins, displaySecs
        }
    }


    return (
        <View>
            {
                counter > 0 ?
                    <Text style={{}}>{`${clockify().displayMins}:${clockify().displaySecs}`}</Text>
                    :
                    null
            }
        </View>
    )
}