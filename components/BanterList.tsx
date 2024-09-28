import React from "react";
import { ThemedView } from "./ThemedView";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { FlatList } from "react-native";
import { banterList } from "@/utils/dummyData";

const BanterList = () => {
    const renderItem = ({
        item,
    }: {
        item: {
            image: ImageSourcePropType | undefined;
            title: string;
            msg: string;
        };
    }) => (
        <View className={`flex-row items-start gap-3 mb-5`}>
            <Image source={item.image} className="w-[41.98px] h-[41.98px]" />
            <View>
                <Text className={`font-medium text-sm leading-5 text-grey_900`}>{item.title}</Text>
                <Text className={`font-normal text-sm leading-5 text-grey_500 !break-words`}>{item.msg}</Text>
            </View>
        </View>
    );

    return (
        <ThemedView className={`px-2`}>
            <FlatList
                data={banterList}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
        </ThemedView>
    );
};

export default BanterList;
