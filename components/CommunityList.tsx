import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { communityDummy } from '@/utils/dummyData';
import { ThemedText } from './ThemedText';
import { useColorScheme } from 'nativewind';

export default function CommunityList() {
    let { colorScheme } = useColorScheme();
    
    const renderItem = ({ item, index }: { item: { name: string; image: any }, index: number }) => (
        <View style={{flex: 1 }} className={`mt-4 py-[18px]
            ${ colorScheme == 'dark' ? "border-grey_500" : "border-grey_200"} 
            ${ communityDummy.length - 1 === index ? "border-b-none" : "border-b" }
            flex-row items-center justify-between gap-[0.625rem]`}
        >
            <View>
                <ThemedText className='font-medium text-base leading-6'>{item.name}</ThemedText>
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
            keyExtractor={(item, index) => item.name + index + Math.random()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    );
}