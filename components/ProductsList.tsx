import React from 'react';
import { FlatList, Image, View, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from './ThemedText';
import { products } from './shared/dummyData';
import { router } from 'expo-router';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { offlineImage } from '@/constants/images';



const ProductsList = () => {
    const renderItem = ({ item }: { item: { img: any, title: string, price: string } }) => (
        <View className='w-[49.5%]' >
            <Pressable onPress={() => router.push(`/details`)}>
                <View className={``}>
                    <Image source={offlineImage.onboarding1} className={`w-full h-[210px]`} />
                    <ThemedText className='font-normal text-sm leading-5 px-2 pt-2'>{item.title}</ThemedText>
                    <ThemedText className={`font-normal text-xs leading-4 px-2`}>{item.price}</ThemedText>
                </View>
            </Pressable>
        </View>
    )

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.title + Math.random()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            key={'two-columns'}
            columnWrapperStyle={styles.columnWrapper}
            style={styles.flatlistPadding}
        />
    )
}

export default ProductsList

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 16,
        gap: 5
    },
    flatlistPadding: {
        marginBottom: hp("22")
    }
});