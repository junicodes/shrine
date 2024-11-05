import React from 'react';

import { FlatList, Image, Text, View } from 'react-native';
import { foodTypes } from './shared/dummyData';
import { ThemedText } from './ThemedText';

const CategoryList = () => {
    const renderItem = ({ item }: { item: { name: string, image: any } }) => (
        <View className={`px-4 py-[10px] rounded-[100px] border border-grey_100 !flex flex-row items-center gap-[10px] min-w-[117px] mx-2`}>
            <View className={`bg-gret_50 rounded-[100px] py-[5px] px-[10px] w-[40px] h-[34px]`}>
                <Image source={item.image} className='w-[20px] h-[24px]' />
            </View>
            <ThemedText className={`font-medium text-xs leading-4 text-of`}>{item.name}</ThemedText>
        </View>
    );

    return (
        <FlatList
            data={foodTypes}
            renderItem={renderItem}
            keyExtractor={(item) => item.name + Math.random()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    )
}

export default CategoryList