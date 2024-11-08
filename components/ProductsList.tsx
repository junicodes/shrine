import React from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { products } from './shared/dummyData';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Product {
    img: any;
    title: string;
    price: string;
};

const ProductsList = () => {
    const renderItem = ({ item }: { item: { img: any, title: string, price: string } }) => (
        <View className='w-[45%] p-2'>
            <View className={`gap-[13.3px]`}>
                <Image source={item.img} className={`w-full rounded-[8.87px] h-[164.04px]`} />
                <ThemedText className='font-normal text-sm leading-5 text-grey_900'>{item.title}</ThemedText>
                <ThemedText className={`font-normal text-xs leading-4 text-grey_500`}>{item.price}</ThemedText>
            </View>
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
        gap: 10
    },
    flatlistPadding: {
        marginBottom: hp("22")
    }
});