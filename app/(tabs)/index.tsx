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
import Overview from "@/components/Overview";
import EventsList from "@/components/EventsList";
import EventsCategoryList from "@/components/EventsCategoryList";
import Events from "@/components/Events";

const Home = () => {
  const { headerView } = globalStyles();
  const { colorScheme, setColorScheme } = useColorScheme();
  const [view, setView] = useState<string>('overview');

  return (
    <ThemedView className="px-0">
      <View className='flex flex-row items-center py-5 px-4' style={headerView}>
        <View className=''>
          <ThemedText type='subtitle' className=' font-normal text-base leading-6'>Good morning,</ThemedText>
          <View className='flex gap-2 flex-row mt-1 items-center'>
            <Image source={offlineImage.user_avatar} className='w-[27px] h-[27px]' />
            <ThemedText className='font-bold text-lg leading-6'>Okechukwu</ThemedText>
          </View>
        </View>
        <View className='flex-row gap-4 justify-center'>
          <SVGSearch />
          <SVGNotification />
        </View>
      </View>
      <View className="mt-6 mb-5 px-4">
        <View className="flex-row justify-start !space-x-3">
          <TouchableOpacity
            className={`h-10 flex flex-row rounded-lg px-4 items-center justify-center ${colorScheme === "light" ? "bg-[#F9FAFB]" : "border border-gray-500 bg-none"}`}
            onPress={() => {
              setView('overview')
            }}
          >
            <Text className={`text-[#9CA3AF] ${view === 'overview' && 'text-primary_900 font-semibold'}`}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`h-10 flex flex-row rounded-lg px-4 items-center justify-center ${colorScheme === "light" ? "bg-[#F9FAFB]" : "border border-gray-500 bg-none"}`}
            onPress={() => {
              setView('market')
            }}
          >
            <Text className={`text-[#9CA3AF] ${view === 'market' && 'text-primary_900 font-semibold'}`}>Market PLace</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`h-10 flex flex-row rounded-lg px-4 items-center justify-center ${colorScheme === "light" ? "bg-[#F9FAFB]" : "border border-gray-500 bg-none"}`}
            onPress={() => {
              setView('events')
            }}
          >
            <Text className={`text-[#9CA3AF] ${view === 'events' && 'text-primary_900 font-semibold'}`}>Event</Text>
          </TouchableOpacity>
        </View>
      </View>

      {view === 'overview' && (
        <Overview />
      )}

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

      {view === 'events' && (
        <>
          <View className={`my-1`}>
            <EventsCategoryList />
          </View>
          <View className={`my-4 pb-12`}>
            <Events />
          </View>
          <Pressable className={`absolute bottom-8 right-5 bg-primary_900 rounded-full w-[50px] h-[50px] flex-row justify-center items-center`}>
            <Image source={offlineImage.white_plus} className="w-6 h-6" />
          </Pressable>
        </>
      )}
    </ThemedView>
  );
};

export default Home;
