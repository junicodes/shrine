
import React, { useEffect, useState } from 'react'
import { Button, PaperProvider, Text } from 'react-native-paper';
import { ScrollView, View, Image } from 'react-native'
import globalStyles from '../assets/styles/global';
import { router } from 'expo-router';
import { offlineImage } from '@/constants/images';
import { useColorScheme } from "nativewind";
import { ThemedText } from '@/components/ThemedText';
import { onBoardingList } from '@/constants/supportList';
import { getObjectAsyncStorage, saveObjectAsyncStorage } from '@/utils/asyncStorage';

const Onboarding = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [ sliderIndex, setSliderIndex ] = useState(0);

  return (
    <PaperProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        <View className='flex-1'>
            <Image
                source={offlineImage.splashScreen}
                className={`w-full h-full`}    
            /> 
        </View>
        <View className={`px-7 w-full pt-10 pb-10`}>
          <View className="flex-1 items-center justify-center w-full">
            <ThemedText type='title' className='text-center'>
                {onBoardingList[sliderIndex].title}
            </ThemedText>
            <ThemedText type='subtitle' className={`text-center pt-5 ${colorScheme === "light" ? "text-gray-400" : "text-white"}`}>
                {onBoardingList[sliderIndex].description}
            </ThemedText>
          </View>
          <View className={`flex flex-row justify-center space-x-2 py-8`}>
            {
                [0,1,2].map((index) => (
                    <Image
                        key={"activeOval" + index}
                        className={`w-[8px] h-[8px] rounded-full`}
                        source={sliderIndex === index ? offlineImage.activeOval : offlineImage.inActiveOval}
                        resizeMode="contain"
                    />
                ))                                                                                                                                                                                                   
            }
          </View>
          <Button
            icon=""
            mode="contained"
            textColor="white"
            labelStyle={{fontSize: 16}}
            buttonColor="#7f1d1d"
            rippleColor="#7F1D1D7A"
            className={`rounded-xl h-14 justify-center`}
            onPress={ async () => {
                if(sliderIndex === 2) {
                  await saveObjectAsyncStorage('isOnboarding', {status: true});
                  return router.replace("/signup")
                }
                setSliderIndex(sliderIndex + 1)   
            }}
          >
            {sliderIndex === 2 ? "Get Started" : "Next"}
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

export default Onboarding
