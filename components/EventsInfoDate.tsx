import React from "react";
import { ThemedView } from "./ThemedView";
import { eventsInfo } from "./shared/dummyData";
import { View, Image } from "react-native";
import { ThemedText } from "./ThemedText";
import { useColorScheme } from "nativewind";

const EventsInfoDate = () => {
    const { colorScheme, setColorScheme } = useColorScheme();

    return (
        <ThemedView className={`px-2 flex-1`}>
            {eventsInfo.map((_events, index) => (
                <View key={index} className={`my-3 flex-row gap-3 items-center`}>
                    <Image source={_events.uri} className={`w-7 h-7`} />
                    <View className={``}>
                        <ThemedText
                            className={`${colorScheme === "dark" ? "text-white" : "text-grey_900"
                                } font-medium text-sm leading-5`}
                        >
                            {_events.events_bold}
                        </ThemedText>
                        <ThemedText
                            className={`${colorScheme === "dark" ? "text-white" : "text-grey_500"
                                } font-medium text-xs leading-4`}
                        >
                            {_events.events_light}
                        </ThemedText>
                    </View>
                </View>
            ))}
        </ThemedView>
    );
};

export default EventsInfoDate;
