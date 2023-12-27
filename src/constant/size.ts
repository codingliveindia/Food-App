import { Dimensions } from "react-native";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";


const RPHeight = (number: number) => {
    return responsiveScreenHeight(number)
}

const RPWidth = (number: number) => responsiveScreenWidth(number)

const RPFont = (number: number) => responsiveScreenFontSize(number)


const large = RPFont(6)
const medium = RPFont(4)
const small = RPFont(3)
const body = RPFont(2)

const cSize = (size: number) => { return RPFont(size) }


const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width


export const Size = {
    RPHeight, RPWidth, RPFont,
    large, medium, small, body, cSize, screenHeight, screenWidth
}