import { ThemedView, } from '@/components/ThemedView';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import ThePeopleList from '@/components/thePeopleList';

const thePeople = () => {
    return (
        <ThemedView style={styles.mainBg} className='px-2'>
            <View className={`mt-4 flex-row justify-between items-center`}>
                <TabBarIcon name='arrow-back' color={'#111827'} />
                <Text className='font-bold text-xl leading-8 text-grey_900'>The People</Text>
                <TabBarIcon name='ellipsis-vertical' color='#111827' />
            </View>
            <ThemedView className='px-2'>
                <View className='flex-row justify-between mt-6'>
                    <Text className='font-bold text-xs leading-4 text-grey_400'>CFC BOYS</Text>
                    <TabBarIcon name='add' color='#9CA3AF' />
                </View>
                <ThePeopleList />
            </ThemedView>
        </ThemedView>
    )
}

export default thePeople;

const styles = StyleSheet.create({
    mainBg: {
        flex: 1,
    }
})