import ImageProfile from '@/components/ImageProfile'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import { Formik } from 'formik'
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
    const [checked, setChecked] = useState(false);
    const [payload, setPayload] = useState<FormPayloadCreateCommunity>({
        image: '',
        communityName: '',
        description: '',
        is_private: false,
    });

    const handleFormSubmit = () => { };

    return (
        <ThemedView className='px-3' style={styles.lightBg}>
            <View className='mt-4 flex-row'>
                <TabBarIcon name='arrow-back' color={'#111827'} />
                <Text className='font-bold text-xl leading-8 text-grey_900 mx-auto'>Create Community</Text>
            </View>
            <Formik
                enableReinitialize
                initialValues={{ ...payload } as any}
                onSubmit={handleFormSubmit}
            >
                {(props: any) => (
                    <View className=''>
                        <ImageProfile />
                        <View className='mt-32'>
                            <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Community Name</ThemedText>
                            <View>
                                <Image
                                    className={`w-5 h-5 absolute z-20 top-[18px] left-3`}
                                    source={offlineImage.email}
                                />
                                <TextInput
                                    className='pl-11 py-3 border border-[#E5E7EB] rounded-xl'
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
            <View className='absolute bottom-5 left-0 flex flex-row justify-center right-0 '>
                <Button
                    buttonColor='#761022'
                    textColor='#ffffff'
                    className='w-11/12 py-3 border-2 border-white'>
                    Create Community
                </Button>
            </View>
        </ThemedView>
    )
}

export default createCommunity;

const styles = StyleSheet.create({
    lightBg: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    textArea: {
        textAlignVertical: 'top',
    }
});