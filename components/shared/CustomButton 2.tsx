import React from "react";
import { Text, TouchableOpacity, } from "react-native";

interface ICustomButton {
    onPress?: () => void;
    title: string;
    className?: string;
    textStyle: string;
    BtnStyle?: object;
}

const CustomButton = ({ onPress, title, className, textStyle, BtnStyle }: ICustomButton) => {
    return (
        <TouchableOpacity onPress={onPress} className={className} style={BtnStyle} >
            <Text className={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton