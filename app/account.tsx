import globalStyles from '@/assets/styles/global'
import ImageProfile from '@/components/ImageProfile'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { offlineImage } from '@/constants/images'
import { FormPayload_SignIn } from '@/types/auth'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, } from 'react-native-paper';
import { TextInput, View, useColorScheme, Image, ScrollView, Text } from 'react-native';
import { router } from 'expo-router';
import PageHeader from '@/components/shared/PageHeader';
import DropDownPicker from 'react-native-dropdown-picker';


const Account = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Adelaide', value: 'Adelaide' },
        { label: 'Surulere', value: 'Surulere' },
        { label: 'Island', value: 'Island' },
    ]);


    const { gselBox, ginput } = globalStyles();
    const [payload, setPayload] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        about: '',
    });

    const characterLimit = 100;
    const color = useColorScheme();

    const handleFormSubmit = () => { }

    return (
        <ThemedView className='px-2 flex-1'>
            <PageHeader title={'Edit Profile'} goBackUrl={'/(tabs)/profile'} />
            <View className={`h-[157px] mb-5`}>
                <ImageProfile />
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
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
                                            source={offlineImage.red_color_user}
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
                                    <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Username</ThemedText>
                                    <View>
                                        <Image
                                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                            source={offlineImage.red_color_user}
                                        />
                                        <TextInput
                                            className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                                            style={[ginput]}
                                            placeholder="Username"
                                            placeholderTextColor="#ABAFB3"
                                            keyboardType="email-address"
                                            onChangeText={props.handleChange('username')}
                                            value={props.values.username}
                                            onBlur={props.handleBlur('username')}
                                            maxLength={20}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Email</ThemedText>
                                    <View>
                                        <Image
                                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                            source={offlineImage.red_color_email}
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
                                    <ThemedText className='mb-2 mt-3 text-sm font-semibold'>Phone Number</ThemedText>
                                    <View>
                                        <Image
                                            className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                            source={offlineImage.red_color_phone}
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
                                <View>
                                    <ThemedText className='mb-2 mt-3 text-sm font-semibold'>Location</ThemedText>
                                    <DropDownPicker
                                        open={open}
                                        value={value}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setValue}
                                        setItems={setItems}
                                        placeholder="Select a location"
                                        style={{ borderWidth: 1, borderColor: '#E5E5E5' }}
                                    />
                                </View>
                                <View>
                                    <ThemedText className='mb-2 mt-3 text-sm font-semibold'>About</ThemedText>
                                    <TextInput
                                        className='pl-2 pt-2 border border-[#E5E5E5] text-left rounded-xl h-[119px] !items-start !justify-start'
                                        multiline
                                        placeholder="In a few words, describe your event"
                                        value={props.values.about}
                                        onChangeText={props.handleChange('about')}
                                        style={{ textAlignVertical: 'top', }}
                                        maxLength={characterLimit}
                                    />
                                    <ThemedText>
                                        {props.values.about.length}/{characterLimit}
                                    </ThemedText>
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
            </ScrollView>
        </ThemedView>
    )
}

export default Account