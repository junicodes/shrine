import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { ScrollView, View } from "react-native";
import WeThePeopleCommunityList from "./WeThePeopleCommunityList";
import OverViewMarketList from "./OverViewMarketList";
import EventsList from "./EventsList";

const Overview = () => {
    return (
        <ThemedView className={`px-3 flex-1`}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <View className={`px-2`}>
                    <ThemedText className={`text-grey_500 font-normal text-xs leading-4`}>
                        Get your dream item easily on Tivora and get other interesting offers
                    </ThemedText>
                    <View className={`mt-6 px-1`}>
                        <ThemedText className={`!text-grey_900 text-base font-normal leading-6`}>Communities</ThemedText>
                        <View className={`mt-2`}>
                            <WeThePeopleCommunityList />
                        </View>
                    </View>
                    <View className={`mt-6 px-1`}>
                        <ThemedText className={`!text-grey_900 text-base font-normal leading-6`}>Marketplace</ThemedText>
                        <View className={`mt-2`}>
                            <OverViewMarketList />
                        </View>
                    </View>
                    <View className={`mt-6 px-1`}>
                        <ThemedText className={`!text-grey_900 text-base font-normal leading-6`}>Events</ThemedText>
                        <View className={`mt-2`}>
                            <EventsList />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ThemedView>
    );
};

export default Overview;
