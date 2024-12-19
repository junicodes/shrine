import { useColorScheme } from 'nativewind';
import React from 'react'
import { View, Image, FlatList } from 'react-native';
import { ThemedText } from './ThemedText';
import { eventsCategory } from './shared/dummyData';

const EventsCategoryList = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const renderItem = ({ item }: { item: { name: string, image: any } }) => (
        <View className={`px-4 py-[10px] h-[50px] rounded-full border !flex flex-row items-center min-w-[117px] mx-1 ${colorScheme === "light" ? "border-grey_100" : "border-gray-500 bg-none"}`}>
            <View className={`bg-gret_50 rounded-[100px] py-[5px] px-[10px] w-[40px] h-[34px]`}>
                <Image source={item.image} className='w-[20px] h-[24px]' />
            </View>
            <ThemedText className={`font-medium text-xs leading-4 px-2`}>{item.name}</ThemedText>
        </View>
    );

    return (
        <FlatList
            data={eventsCategory}
            renderItem={renderItem}
            keyExtractor={(item) => item.name + Math.random()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    )
}

export default EventsCategoryList