
import PageHeader from '@/components/shared/PageHeader'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import React from 'react'
import { View, Text, Image } from 'react-native'

const Profile = () => {
  return (
    <ThemedView>
        <PageHeader title={'Profile'} />
        <View className={`flex-row items-start gap-3 mb-5`}>
          <Image source={offlineImage.avatar_one} className="w-[41.98px] h-[41.98px]" />
          <View>
              <Text className={`font-medium text-sm leading-5 text-grey_900`}>{"Okechukwu Obi"}</Text>
              <Text className={`font-normal text-sm leading-5 text-grey_500`}>{"+6142274883"}</Text>
          </View>
        </View>
    </ThemedView>
  )
}

export default Profile