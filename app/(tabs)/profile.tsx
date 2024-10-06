import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import React from 'react'
import { View, Text, Image, useColorScheme, Pressable } from 'react-native'
import { router } from 'expo-router'

const Profile = () => {
  const color = useColorScheme();

  return (
    <ThemedView className='px-2 flex-1'>
      <View className={`mt-10 `}>
        <ThemedText className={`font-bold text-xl leading-7 text-center text-natural_grey_900`}>Profile</ThemedText>
      </View>
      <View className={`border-b border-b-grey_100 border-t border-t-grey_100 flex-row items-center gap-3 mt-8 py-3`}>
        <Image source={offlineImage.avatar_three} className={`w-[52px] h-[52px]`} />
        <View className={``}>
          <ThemedText className={`font-bold text-base leading-6 text-grey_900`}>Oge Baby</ThemedText>
          <ThemedText className={`font-normal text-sm leading-5 text-grey_400`}>(+1) 234 567 890</ThemedText>
        </View>
      </View>
      <View className={`mt-8 px-2 flex-row justify-between items-center`}>
        <Pressable onPress={() => router.push('/account')}>
          <View className={`flex-row gap-3 items-center`}>
            <View className={`w-[40px] h-[40px] rounded-full bg-primary_50 justify-center items-center`}>
              <Image source={offlineImage.user_red} className={`w-[20px] h-[20px]`} />
            </View>
            <ThemedText className={`font-medium text-base leading-6 text-grey_900`}>My Account</ThemedText>
          </View>
        </Pressable>
        <TabBarIcon name='chevron-forward' color={color === 'dark' ? '#ffffff' : '#9CA3AF'} />
      </View>
      <View className={`mt-auto mb-28`}>
        <Pressable>
          <ThemedText className={`font-bold text-base leading-6 text-others_red text-center`}>Logout</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  )
}

export default Profile;