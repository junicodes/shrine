import { offlineImage } from "@/constants/images";
import React from "react";
import { Image, Pressable } from "react-native";
import { Href, router } from 'expo-router';
import { useColorScheme } from "nativewind";
import { TabBarIcon } from "../navigation/TabBarIcon";

const GoBack = ({ route }: { route: Href }) => {
    const { colorScheme } = useColorScheme();

    return <>
        <Pressable
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => router.replace(route)}
        >
            <Image source={colorScheme === "light" ? offlineImage.goBackDark : offlineImage.goBackLight} />
        </Pressable>
    </>;
};

export default GoBack;
