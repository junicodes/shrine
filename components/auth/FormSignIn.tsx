import { StyleSheet, TextInput, useColorScheme, GestureResponderEvent, Text, View, Image, Pressable } from 'react-native';
import { Formik, FormikValues, FormikHelpers } from "formik";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Tooltip } from '@rneui/themed';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from 'react-native-paper';
import ToastModal from '../shared/ToastModal';
import { FormPayload_SignIn } from '@/types/auth';
import globalStyles from '@/assets/styles/global';
import { validateEmail } from '@/constants/validations/auth';
import { ThemedText } from '../ThemedText';
import { offlineImage } from '@/constants/images';
import { ThemedView } from '../ThemedView';
import { router } from 'expo-router';



export default function FormSignIn({ }: any) {

    //Global Styles Import 
    const { gselBox, ginput } = globalStyles();
    const [payload, setPayload] = useState<FormPayload_SignIn>({
        email: '',
        password: '',
    })
    //Hooks

    const navigation = useNavigation();
    let colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark'

    //Handler Function
    const handleFormSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<GestureResponderEvent>) => {
        //validate is state is selected 

        if (values.email === '' && values.password === '') {
            ToastModal({
                message: "Please enter email and password to continue",
                position: "top", //top | bottom
                color: "#d6ae0d",
            });
            return false;
        }

        if (validateEmail(values.email)) {
            ToastModal({
                message: "Email address not valid, please check email and try again",
                position: "top", //top | bottom
                color: "#d6ae0d",
            });
            return false;
        }

        //Update context state with selected estate

        //Get selected estate id form payload

        //Navigate to dashboard after login
        // navigation.navigate("Root")

    };


    return (
        <View className={`py-5`}>
            <Formik
                enableReinitialize
                initialValues={{ ...payload } as any}
                onSubmit={handleFormSubmit}
            >
                {(props: any) => (
                    <View>
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
                        <Text className='text-right pt-4 text-red-900'>Forgot Password?</Text>
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
                                Login
                            </Button>
                            <View className='flex flex-row justify-center space-x-1 mt-6'>
                                <Text className='text-gray-400'>Don't have account?</Text>
                                <Pressable
                                    onPress={async () => {
                                        router.replace("/signup")
                                    }}
                                >
                                    <Text className='text-red-900'>Sign up</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                )
                }
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: 'raleway-semibold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
