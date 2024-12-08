import { offlineImage } from '@/constants/images'
import React from 'react'
import { View, Image } from 'react-native'
import { ThemedText } from '../ThemedText'

const ProfileDetail = () => {
    return (
        <View>
            <View
                className={`rounded-lg flex-row items-center gap-4 w-full py-2 h-[59px]`}
            >
                <Image
                    source={offlineImage.online_user}
                    className={`w-[36px] h-[36px] my-auto`}
                />
                <View className={`h-full`}>
                    <View className={`flex-row items-center gap-2`}>
                        <ThemedText className="font-medium text-base leading-6 text-grey_900">
                            Okechukwu Benjor
                        </ThemedText>
                        <Image
                            source={offlineImage.verify_badge}
                            className={`w-3 h-3`}
                        />
                    </View>
                    <View className={`flex-row items-center gap-2`}>
                        <Image source={offlineImage.location} className={`w-3 h-3`} />
                        <ThemedText className="font-medium text-xs leading-4 text-grey_500">
                            Adelaide, Australia
                        </ThemedText>
                    </View>
                </View>
            </View>
            <ThemedText
                className={`font-normal text-sm leading-5 text-grey_500 w-[327px] mt-4`}
            >
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout
            </ThemedText>
        </View>
    )
}

export default ProfileDetail