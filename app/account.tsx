import globalStyles from '@/assets/styles/global'
import ImageProfile from '@/components/ImageProfile'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import { FormPayload_SignIn } from '@/types/auth'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { TextInput, View, useColorScheme, Image, } from 'react-native';
import { router } from 'expo-router';
import PageHeader from '@/components/shared/PageHeader'


const Account = () => {
    const { gselBox, ginput } = globalStyles();
    const [payload, setPayload] = useState({
        fullname: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const color = useColorScheme();

    const handleFormSubmit = () => { }

    return (
        <ThemedView className='px-2 flex-1'>
            <PageHeader title={'My Account'} goBackUrl={'/(tabs)/profile'} />
            <View className={`h-[157px]`}>
                <ImageProfile />
            </View>
            <View className='mt-12'>
                <Formik
                    enableReinitialize
                    initialValues={{ ...payload } as any}
                    onSubmit={handleFormSubmit}
                >
                    {(props: any) => (
                        <View className='px-4'>
                            <View>
                                <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Full Name</ThemedText>
                                <View>
                                    <Image
                                        className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                        source={offlineImage.profile}
                                    />
                                    <TextInput
                                        className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                                        style={[ginput]}
                                        placeholder="Email address"
                                        placeholderTextColor="#ABAFB3"
                                        keyboardType="email-address"
                                        onChangeText={props.handleChange('fullname')}
                                        value={props.values.fullname}
                                        onBlur={props.handleBlur('fullname')}
                                        maxLength={20}
                                    />
                                </View>
                            </View>
                            <View>
                                <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Email</ThemedText>
                                <View>
                                    <Image
                                        className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                        source={offlineImage.email}
                                    />
                                    <TextInput
                                        className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                                        style={[ginput]}
                                        placeholder="Email address"
                                        placeholderTextColor="#ABAFB3"
                                        keyboardType="email-address"
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                        onBlur={props.handleBlur('email')}
                                        maxLength={20}
                                    />
                                </View>
                            </View>
                            <View>
                                <ThemedText className='mb-2 mt-3 text-sm font-semibold'>Password</ThemedText>
                                <View>
                                    <Image
                                        className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                        source={offlineImage.password}
                                    />
                                    <TextInput
                                        className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                                        style={[ginput]}
                                        placeholder="Password"
                                        placeholderTextColor="#ABAFB3"
                                        onChangeText={props.handleChange('password')}
                                        secureTextEntry={true}
                                        value={props.values.password}
                                        onBlur={props.handleBlur('password')}
                                        maxLength={20}
                                    />
                                    <Image
                                        className={`w-5 h-5 absolute z-20 top-4 right-3`}
                                        source={offlineImage.eye}
                                    />
                                </View>
                            </View>
                            <View>
                                <ThemedText className='mb-2 mt-3 text-sm font-semibold'>Phone Number</ThemedText>
                                <View>
                                    <Image
                                        className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                        source={offlineImage.phone}
                                    />
                                    <TextInput
                                        className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                                        style={[ginput]}
                                        placeholder="Password"
                                        placeholderTextColor="#ABAFB3"
                                        onChangeText={props.handleChange('phoneNumber')}
                                        secureTextEntry={true}
                                        value={props.values.phoneNumber}
                                        onBlur={props.handleBlur('phoneNumber')}
                                        maxLength={20}
                                    />
                                </View>
                            </View>
                            <View className={`w-full mx-auto pt-6`}>
                                <Button
                                    icon=""
                                    mode="contained"
                                    textColor="white"
                                    labelStyle={{ fontSize: 16 }}
                                    buttonColor="#7f1d1d"
                                    rippleColor="#7F1D1D7A"
                                    className={`rounded-xl h-14 justify-center`}
                                    onPress={async () => {
                                        // await saveObjectAsyncStorage('isOnboarding', {status: true});
                                        // return router.replace("/registration")
                                        router.push('/(tabs)')
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </View>
                        </View>
                    )
                    }
                </Formik>
            </View>
        </ThemedView>
    )
}

export default Account