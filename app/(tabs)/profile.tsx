import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import React from 'react'
import { View, Text, Image, useColorScheme, Pressable } from 'react-native'
import { Href, router } from 'expo-router'
import PageHeader from '@/components/shared/PageHeader'

interface MenuList {
  title: string,
  uri: Href<string | object>,
  image: string
}

const Profile = () => {
  const color = useColorScheme();
  const acct = "/account"

  const menuList: MenuList[] = [
    {
      title: "My Account",
      uri: "/account",
      image: ""
    },
    {
      title: "Settings",
      uri: "/settings",
      image: ""
    }
  ];

  return (
    <ThemedView className='px-2 flex-1'>
      <PageHeader title={'Profile'} />
      <View className={`border-b border-b-grey_100 border-t border-t-grey_100 flex-row items-center gap-3 mt-8 py-3`}>
        <Image source={offlineImage.avatar_three} className={`w-[52px] h-[52px]`} />
        <View className={``}>
          <ThemedText className={`font-bold text-base leading-6`}>Oge Baby</ThemedText>
          <ThemedText className={`font-normal text-sm leading-5`}>(+1) 234 567 890</ThemedText>
        </View>
      </View>
      {
        menuList.map(x => (
          <Pressable key={Math.random() + x.title + "menu-list"} onPress={() => router.push(x.uri)}>
            <View className={`mt-8 px-2 flex-row justify-between items-center`}>
                <View className={`flex-row gap-3 items-center`}>
                  <View className={`w-[40px] h-[40px] rounded-full bg-primary_50 justify-center items-center`}>
                    <Image source={offlineImage.user_red} className={`w-[20px] h-[20px]`} />
                  </View>
                  <ThemedText className={`font-medium text-base leading-6`}>{x.title}</ThemedText>
                </View>
              <TabBarIcon name='chevron-forward' color={color === 'dark' ? '#ffffff' : '#9CA3AF'} />
            </View>
          </Pressable>
        ))
      }
      <View className={`mt-auto mb-28`}>
        <Pressable>
          <ThemedText className={`font-bold text-base leading-6 text-others_red text-center`}>Logout</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  )
}

export default Profile;