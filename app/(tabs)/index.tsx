import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import CategoryList from "@/components/CategoryList";
import ProductsList from "@/components/ProductsList";
import globalStyles from "@/assets/styles/global";
import SVGNotification from '@/components/svg/SVGNotification';
import SVGSearch from '@/components/svg/SVGSearch';
import SVGPlus from '@/components/svg/SVGPlus';

const Home = () => {
  const { headerView } = globalStyles();
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
          <Button
            textColor="#761022"
            className="bg-gret_50 h-10 rounded-lg text-xs leading-4"
            onPress={() => setView('market')}
          >
            Market PLace
          </Button>
          <Button
            textColor="#9CA3AF"
            className="bg-gret_50 h-10 rounded-lg"
            onPress={() => setView('events')}
          >
            Events
          </Button>
          <Button
            textColor="#9CA3AF"
            className="bg-gret_50 h-10 rounded-lg"
          >
            Create New&nbsp;
            <SVGPlus />
          </Button>
        </View>
      </View>

      {view === 'market' && (
        <>
          <View className={`my-2 px-2`}>
            <CategoryList />
          </View>
          <View className={`my-4 px-2 pb-12`}>
            <ProductsList />
          </View>
        </>
      )}
    </ThemedView>
  );
};

export default Home;
