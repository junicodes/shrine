import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { communityDummy } from '@/utils/dummyData';

export default function CommunityList() {
    const renderItem = ({ item }: { item: { name: string; image: any } }) => (
        <View className='mt-6 py-[18px] px-[17px] rounded-2xl border-2 border-grey_200 flex-row items-center justify-between gap-[0.625rem]'>
            <View>
                <Text className='font-medium text-base leading-6 text-grey_900'>{item.name}</Text>
                <Image source={item.image} className='w-[127.32px] h-[32px] mt-3' />
            </View>
            <Button
                buttonColor='#761022'
                textColor='#ffffff'
                className='rounded-lg py-[0.625rem] px-2 font-medium text-xs leading-4'
            >
                Joined
            </Button>
        </View>
    );

    return (
        <FlatList
            data={communityDummy}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
    );
}