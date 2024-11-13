import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { thePeopleDummy } from "@/utils/dummyData";
import { FlatList, Image, ImageProps, ImageSourcePropType, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';


const ThePeopleList = () => {
    const router = useRouter();

    const renderItem = ({
        item,
    }: {
        item: {
            people: string;
            image: any;
            lastMessage: string;
            unread: number | null;
        };
    }) => (
        <View>
            <TouchableOpacity onPress={() => router.push(`/chat`)}>
                <View className="flex-row justify-between items-end mt-5">
                    <View className="flex-row items-start gap-2">
                        <Image source={item.image} className="w-[24px] h-[24px]" />
                        <View>
                            <Text className="font-medium text-base leading-6 text-grey_900">
                                {item.people}
                            </Text>
                            <Text className="font-normal text-sm leading-5 text-grey_500">
                                {item.lastMessage}
                            </Text>
                        </View>
                    </View>
                    <Text
                        className={`${item.unread !== null &&
                            "bg-primary_900 w-[20px] h-[20px] rounded-full text-white text-xs font-bold leading-4 text-center items-center pt-[2px]"
                            }`}
                    >
                        {item.unread}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <ThemedView className="px-2">
            <FlatList
                data={thePeopleDummy}
                renderItem={renderItem}
                keyExtractor={(item) => item.people}
            />
        </ThemedView>
    );
};

export default ThePeopleList;
