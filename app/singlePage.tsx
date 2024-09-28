import BanterList from '@/components/BanterList';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { ThemedView } from '@/components/ThemedView';
import { offlineImage } from '@/constants/images';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TextInput } from 'react-native';

interface SearchInput {
    input: string;
}

const singlePage = () => {
    const [payload, setPayload] = useState<SearchInput>({
        input: '',
    })

    // Form Submit
    const handleFormSubmit = () => { };

    return (
        <ThemedView className='px-2' style={styles.bgBody}>
            <View className={`mt-4 flex-row justify-between items-center`}>
                <TabBarIcon name='arrow-back' color={'#111827'} />
                <View className='flex-row gap-2 items-center'>
                    <Image source={offlineImage.small_logo} className='w-[24px] h-[24px]' />
                    <Text className='font-bold text-xl leading-8 text-grey_900'>Banter</Text>
                </View>
                <TabBarIcon name='ellipsis-vertical' color='#111827' />
            </View>
            <View className={`mt-4 flex-row items-center justify-center space-x-2`}>
                <Text className={`font-normal text-xs leading-4 text-grey_400`}>TODAY</Text>
                <View className='w-[219px] h-[1px] border-[0.87px] border-grey_200'></View>
            </View>
            <BanterList />

            <View className={`h-[104px] bg-white absolute bottom-0 w-screen px-2`}>
                <View className='h-[80px] my-auto'>
                    <Formik
                        enableReinitialize
                        initialValues={{ ...payload } as any}
                        onSubmit={handleFormSubmit}
                    >
                        {(props: any) => (
                            <View className={`flex-row justify-around gap-3 items-center`}>
                                <View className='flex-row relative'>
                                    <TextInput
                                        className='p-4 w-[275px] bg-gret_50 border border-[#E5E5E5] rounded-xl'
                                        placeholder="Start a message"
                                        placeholderTextColor="#ABAFB3"
                                        keyboardType="email-address"
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                        onBlur={props.handleBlur('email')}
                                        maxLength={20}
                                    />
                                    <TabBarIcon name='attach-outline' color='#97A4A9' className='absolute right-3 top-4' />
                                </View>
                                <View className={`bg-primary_900 w-[48px] h-[48px] ml-auto rounded-[100px] flex flex-row items-center justify-center`}>
                                    <Image source={offlineImage.send} className='w-[20px] h-[20px]' />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </ThemedView>
    )
}

export default singlePage;

const styles = StyleSheet.create({
    bgBody: {
        flex: 1,
    }
})