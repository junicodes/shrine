import React, { PropsWithChildren, useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { View, Image, Text, Pressable, TouchableOpacity, ViewStyle, useAnimatedValue, Animated } from "react-native";
import { Button } from "react-native-paper";
import CategoryList from "@/components/CategoryList";
import ProductsList from "@/components/ProductsList";
import globalStyles from "@/assets/styles/global";
import SVGNotification from '@/components/svg/SVGNotification';
import SVGSearch from '@/components/svg/SVGSearch';
import SVGPlus from '@/components/svg/SVGPlus';
import { useColorScheme } from 'nativewind';
import { router } from "expo-router";

const Home = () => {
  const { headerView } = globalStyles();
  const { colorScheme, setColorScheme } = useColorScheme();
  const [view, setView] = useState<string>('market');

  return (
    <ThemedView>
      <View className='flex flex-row items-center py-5' style={headerView}>
        <View className=''>
          <ThemedText type='subtitle' className=' font-normal text-base leading-6'>Good morning,</ThemedText>
          <View className='flex gap-2 flex-row mt-1 items-center'>
            <Image source={offlineImage.user_avatar} className='w-[27px] h-[27px]' />
            <ThemedText className='font-bold text-lg leading-6'>Okey Boy</ThemedText>
          </View>
        </View>
        <View className='flex-row gap-4 justify-center'>
          <SVGSearch />
          <SVGNotification />
        </View>
      </View>
      <View className="mt-6 mb-5">
        <View className="flex-row justify-start !space-x-3">
          <TouchableOpacity
              className={`h-10 flex flex-row rounded-lg px-4 items-center justify-center ${colorScheme === "light" ? "bg-[#F9FAFB]" : "border border-gray-500 bg-none"}`}
              onPress={() => {
                setView('market')
              }}
          >
            <Text className="text-[#9CA3AF]">Market PLace</Text>
          </TouchableOpacity>
          <TouchableOpacity
              className={`h-10 flex flex-row rounded-lg px-4 items-center justify-center ${colorScheme === "light" ? "bg-[#F9FAFB]" : "border border-gray-500 bg-none"}`}
              onPress={() => {
                setView('events')
              }}
          >
            <Text className="text-[#9CA3AF]">Event</Text>
          </TouchableOpacity>
          <TouchableOpacity
              className={`h-10 flex flex-row rounded-lg px-4 items-center justify-center ${colorScheme === "light" ? "bg-[#F9FAFB]" : "border border-gray-500 bg-none"}`}
              onPress={() => {
                router.push('/create-community')
              }}
          >
            <Text className="text-[#9CA3AF]">Create New</Text>
            <SVGPlus />
          </TouchableOpacity>
        </View>
      </View>

      {view === 'market' && (
        <>
          <View className={`my-1`}>
            <CategoryList />
          </View>
          <View className={`my-4 pb-12`}>
            <ProductsList />
          </View>
        </>
      )}
    </ThemedView>
  );
};

export default Home;
