import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import CategoryList from "@/components/CategoryList";
import ProductsList from "@/components/ProductsList";

const Home = () => {
  const [view, setView] = useState<string>('market');

  return (
    <ThemedView className="px-2 flex-1">
      <ThemedView className="mt-2 flex flex-row items-center px-2 justify-between">
        <View className="">
          <ThemedText
            type="subtitle"
            className=" font-normal text-base leading-6"
          >
            Good morning,
          </ThemedText>
          <View className="flex gap-2 flex-row mt-1">
            <Image
              source={offlineImage.user_avatar}
              className="w-[27px] h-[27px]"
            />
            <ThemedText className="font-bold text-lg leading-6">
              Okey Boy
            </ThemedText>
          </View>
        </View>
        <View className="flex-row gap-4 justify-center">
          <AntDesign name="search1" size={24} color="#9CA3AF" />
          <FontAwesome5 name="bell" size={24} color="#9CA3AF" />
        </View>
      </ThemedView>
      <View className="mt-4">
        <View className="flex-row justify-start space-x-2">
          <Button
            textColor="#761022"
            className="bg-gret_50 px-[10px] py-2 rounded-lg text-xs leading-4"
            onPress={() => setView('market')}
          >
            Market PLace
          </Button>
          <Button
            textColor="#9CA3AF"
            className="bg-gret_50 px-[10px] py-2 rounded-lg"
            onPress={() => setView('events')}
          >
            Events
          </Button>
          <Button
            textColor="#9CA3AF"
            className="bg-gret_50 px-[10px] py-2 rounded-lg"
            icon={"plus"}
          >
            Create New
          </Button>
        </View>
      </View>
      {view === 'market' && (
        <>
          <ThemedView className={`mt-4 px-2`}>
            <CategoryList />
          </ThemedView>
          <ThemedView className={`mt-4 px-2`}>
            <ProductsList />
          </ThemedView>
        </>
      )}
    </ThemedView>
  );
};

export default Home;
