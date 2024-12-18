import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "nativewind";
import PageHeader from "@/components/shared/PageHeader";
import { View } from "react-native";

const bookEvent = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <ThemedView className={`flex-1 px-2`}>
      <PageHeader title="Book Event" headerShown goBackUrl={`/event-details`} />
      <View className={`px-2`}>
        <ThemedText
          className={`text-base leading-5 ${colorScheme === "dark" ? "text-white" : "text-grey_500"
            }`}
        >
          Contact information
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default bookEvent;
