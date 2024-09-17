import { offlineImage } from "@/constants/images";
import React from "react";
import { Image, Pressable } from "react-native";
import { Href, router } from 'expo-router';

const GoBack = ({route}: {route: Href<string | object>}) => {
    return <>
        <Pressable 
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })} 
            onPress={() => router.replace(route)}
        >
            <Image source={offlineImage.goBackLight} />
        </Pressable>
    </>;
};

export default GoBack;
