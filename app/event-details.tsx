import { eventDetailsCarousel } from '@/components/shared/dummyData'
import PageHeader from '@/components/shared/PageHeader'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { ScrollView, View, Image, Pressable } from 'react-native'
import Swiper from 'react-native-swiper'

const EventDetails = () => {
  return (
    <ThemedView className={`flex-1 px-2`}>
      <PageHeader title="Details" headerShown goBackUrl={`/index`} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className={`h-[252px]`}>
          <Swiper
            autoplay={true}
            autoplayTimeout={3}
            showsPagination={true}
            loop={true}
            paginationStyle={{ bottom: -20 }}
            dotColor="#76102233"
            activeDotColor="#761022"
          >
            {eventDetailsCarousel.map((item, index) => (
              <View className={`w-11/12 mx-auto mt-5`} key={index}>
                <Image source={item.uri} className={`w-full`} />
              </View>
            ))}
          </Swiper>
        </View>
        <View className={``}>
          <ThemedText className={`font-bold text-lg leading-6 text-grey_900`}>La Vida Loca Concert</ThemedText>
          <View>
            <Pressable className={`w-[49px] h-6 rounded-md border border-primary_900 py-[6px] px-[10px]`}>
              <ThemedText className={`font-bold text-[10px] leading-[11.93px] text-primary_900`}>Music</ThemedText>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  )
}

export default EventDetails