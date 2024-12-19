import React from "react";
import { ThemedView } from "./ThemedView";
import { View, Image, Pressable, FlatList, StyleSheet } from "react-native";
import { offlineImage } from "@/constants/images";
import { ThemedText } from "./ThemedText";
import { events } from "./shared/dummyData";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import SVGPlus from "./svg/SVGPlus";

const Events = () => {
    const router = useRouter();
    const renderItem = ({
        item,
    }: {
        item: {
            img: any;
            title: string;
            calendar_img: any;
            location_img: any;
            date: string;
            location: string;
        };
    }) => (
        <View className="w-[49.5%]">
            <Pressable onPress={() => router.push(`/event-details`)}>
                <View className={``}>
                    <Image
                        source={offlineImage.rave}
                        className={`w-full h-[210px]`}
                    />
                    <ThemedText className="font-normal text-sm leading-5 px-2 pt-2">
                        {item.title}
                    </ThemedText>
                    <View className={`mt-3 flex-row gap-2 items-center px-1`}>
                        <Image source={item.calendar_img} className={`w-5 h-5`} />
                        <ThemedText className={`font-normal text-xs leading-4 `}>
                            {item.date}
                        </ThemedText>
                    </View>
                    <View className={`mt-3 flex-row gap-2 items-center px-1`}>
                        <Image source={item.location_img} className={`w-5 h-5`} />
                        <ThemedText className={`font-normal text-xs leading-4`}>
                            {item.location}
                        </ThemedText>
                    </View>
                </View>
            </Pressable>
        </View>
    );

    return (
        <>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={(item) => item.title + Math.random()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                key={"two-columns"}
                columnWrapperStyle={styles.columnWrapper}
                style={styles.flatlistPadding}
            />
        </>
    );
};

export default Events;

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: 24,
        gap: 5,
    },
    flatlistPadding: {
        marginBottom: hp("22"),
    },
});
