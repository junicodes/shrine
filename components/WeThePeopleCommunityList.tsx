import React from "react";
import { ThemedView } from "./ThemedView";
import { useColorScheme } from "nativewind";
import { FlatList, Image, View } from "react-native";
import { weThePeopleCommunities } from "@/utils/dummyData";
import { ThemedText } from "./ThemedText";
import { Button } from "react-native-paper";

const WeThePeopleCommunityList = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const renderItem = ({ item }: { item: { img: any } }) => (
        <View className={`w-[221.78px] !h-[170.26px] rounded-[11.45px] mx-1`}>
            <Image
                source={item.img}
                className={`w-full h-full rounded-[11.45px] relative`}
            />
            <View className={`absolute left-3 top-4`}>
                <ThemedText className={`font-bold text-sm leading-5 text-white`}>
                    We The People
                </ThemedText>
                <ThemedText
                    className={`font-normal text-[9.78px] leading-[13.21px] w-[101.59px] text-white`}
                >
                    Discount 50% for the first transaction
                </ThemedText>
                <Button
                    className={`rounded-xl w-[110px] justify-center mt-3`}
                    mode="contained"
                    textColor="#000000"
                    labelStyle={{ fontSize: 8.58, fontWeight: '700' }}
                    buttonColor="#ffffff"
                    rippleColor="#7F1D1D7A"
                >
                    Join Now
                </Button>
            </View>
        </View>
    );
    return (
        <FlatList
            data={weThePeopleCommunities}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    );
};

export default WeThePeopleCommunityList;
