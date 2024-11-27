import ImageProfile from '@/components/ImageProfile'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import GoBack from '@/components/shared/GoBack'
import PageHeader from '@/components/shared/PageHeader'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import { Formik } from 'formik'
import { useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'

interface FormPayloadCreateCommunity {
    image: string;
    communityName: string;
    description: string;
    is_private: boolean;
}

const createCommunity = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [checked, setChecked] = useState(false);
    const [payload, setPayload] = useState<FormPayloadCreateCommunity>({
        image: '',
        communityName: '',
        description: '',
        is_private: false,
    });

    const handleFormSubmit = () => { };

    return (
        <ThemedView>
            <PageHeader title={'Create Community'} goBackUrl={'/(tabs)/community'} />
            <Formik
                enableReinitialize
                initialValues={{ ...payload } as any}
                onSubmit={handleFormSubmit}
            >
                {(props: any) => (
                    <View>
                        <ImageProfile />
                        <View className='mt-32'>
                            <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Community Name</ThemedText>
                            <View>
                                <Image
                                    className={`w-5 h-5 absolute z-20 top-[12px] left-3`}
                                    source={offlineImage.email}
                                />
                                <TextInput
                                    className='pl-10 py-3 border border-[#E5E7EB] rounded-xl'
                                    placeholder="Community name"
                                    placeholderTextColor="#ABAFB3"
                                    keyboardType="email-address"
                                    onChangeText={props.handleChange('communityName')}
                                    value={props.values.communityName}
                                    onBlur={props.handleBlur('communityName')}
                                    maxLength={20}
                                />
                            </View>
                        </View>
                        <View className='mt-5'>
                            <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Description</ThemedText>
                            <View>
                                <TextInput
                                    className='p-3 border border-[#E5E7EB] rounded-xl min-h-[125px]'
                                    placeholder="In a few sentences, describe what your community is about"
                                    placeholderTextColor="#ABAFB3"
                                    keyboardType="default"
                                    onChangeText={props.handleChange('description')}
                                    value={props.values.description}
                                    onBlur={props.handleBlur('description')}
                                    multiline={true}
                                    style={styles.textArea}
                                    maxLength={100}
                                />
                            </View>
                        </View>
                        <View className='flex flex-row items-center mt-6 flex-wrap space-x-2'>
                            <TouchableOpacity onPress={() => {
                                console.log("ready to work")
                                setChecked(!checked)
                            }}>
                                <View className={`${checked ? "bg-red-900" : "bg-none border border-red-900"} w-6 h-6 rounded-lg relative justify-center align-middle flex flex-row`}>
                                    {
                                        checked && <Image
                                            className={`w-5 h-5 absolute top-0.5`}
                                            source={offlineImage.checkedIcon}
                                        />
                                    }
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text className='text-gray-400'>
                                    I want community to be private
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
            <View className='absolute bottom-8 left-0 flex flex-row justify-center right-0'>
                <TouchableOpacity
                    className={`flex bg-[#7f1d1d] flex-row rounded-xl h-14 w-11/12 px-8 items-center justify-center`}
                    onPress={async () => {
                        // await saveObjectAsyncStorage('isOnboarding', {status: true});
                        // return router.replace("/registration")
                        // router.push('/(tabs)')
                    }}
                >
                    <Text className="text-[#fff] text-base font-semibold">
                        Create Community
                    </Text>
                </TouchableOpacity>
            </View>
        </ThemedView>
    )
}

export default createCommunity;

const styles = StyleSheet.create({
    lightBg: {
        flex: 1,
    },
    textArea: {
        textAlignVertical: 'top',
    }
});