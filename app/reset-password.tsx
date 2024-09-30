import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React, { useEffect, useState } from "react";
import { Image, Text, Keyboard, Pressable, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, GestureResponderEvent, TextInput, Dimensions } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useColorScheme } from "nativewind";
import { Colors } from "@/constants/Colors";
import { router } from 'expo-router';
import FadeInView from "@/components/animations/FadeInView";
import { ThemedText } from "@/components/ThemedText";
import SocialAuth from "@/components/auth/SocialAuth";
import FormSignIn from "@/components/auth/FormSignIn";
import GoBack from "@/components/shared/GoBack";
import TokenInput from "@/components/auth/TokenInput";
import PageHeader from "@/components/shared/PageHeader";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { isNumeric } from "@/constants/helperFunctions";
import globalStyles from "@/assets/styles/global";
import ToastModal from "@/components/shared/ToastModal";
import { validateEmail } from "@/constants/validations/auth";
import { FormPayload_ResetPassword } from "@/types/auth";
import { Formik, FormikValues, FormikHelpers } from "formik";

const ResetPassword = () => {
    // Local States
    const { activeScreen } = useLocalSearchParams();
    const [isLoading, setIsLoading] = useState(false)
    const [counter, setCounter] = useState(59);
    const [token, setToken] = useState("")
    const { ginput } = globalStyles();
    const [payload, setPayload] = useState<FormPayload_ResetPassword>({
        email: ''
    })

    //Hooks
    useEffect(() => {

        if (counter > 0) {
            const counter = setInterval(() => {
                setCounter((counter) => counter - 1)
            }, 1000);

            return () => { clearInterval(counter) };
        }

    }, [counter]);

    useEffect(() => {
        submitTokenRequest(token);
    }, [token])

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

    };

    const submitTokenRequest = (token: string) => {

        if (!isNumeric(token)) return false;

        if (token.length >= 5) {
            setIsLoading(true)

            setTimeout(() => {
                setIsLoading(false);
                setToken("")
            }, 5000)
        }
    }

    //Handler Function
    const handleResendToken = () => {
        //handle the token api request here 
        setCounter(59);
        //set the token state to 59 seconds countdown again
    }



    return (
        <PaperProvider>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Start */}
                <PageHeader title={"Reset Password"} goBackUrl={"/forgot-password"} />

                {/* Body Start */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex-1">
                        <ThemedView className="flex-1">
                            <FadeInView>
                                <ThemedText type='title' className='text-left'>
                                    Reset Password
                                </ThemedText>
                                <ThemedText type='subtitle'>
                                    Enter your email, we will send a verification code to email
                                </ThemedText>

                                <Formik
                                    enableReinitialize
                                    initialValues={{ ...payload } as any}
                                    onSubmit={handleFormSubmit}
                                >
                                    {(props: any) => (
                                        <View className="h-full">
                                            {
                                                activeScreen === "email" && (
                                                    <View className="mt-5">
                                                        <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Email</ThemedText>
                                                        <View className="">
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
                                                )
                                            }
                                            {
                                                activeScreen === "phone" && (
                                                    <View>
                                                        <ThemedText className='mt-1 mb-2 text-sm font-semibold'>Phone Number</ThemedText>
                                                        <View>
                                                            <Image
                                                                className={`w-5 h-5 absolute z-20 top-4 left-3`}
                                                                source={offlineImage.phone}
                                                            />
                                                            <TextInput
                                                                className='pl-11 pt-2 border border-[#E5E5E5] rounded-xl'
                                                                style={[ginput]}
                                                                placeholder="(+61) 405 1993 90"
                                                                placeholderTextColor="#ABAFB3"
                                                                keyboardType="phone-pad"
                                                                onChangeText={props.handleChange('phone')}
                                                                value={props.values.phone}
                                                                onBlur={props.handleBlur('phone')}
                                                                maxLength={20}
                                                            />
                                                        </View>
                                                    </View>
                                                )
                                            }
                                            <View className={`w-full mx-auto pt-6 absolute bottom-48`}>
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
                                                        return router.push({ pathname: `/verify-code` });
                                                    }}
                                                >
                                                    Send Link
                                                </Button>
                                            </View>
                                        </View>
                                    )}
                                </Formik>
                            </FadeInView>
                        </ThemedView>
                        {isLoading && <LoadingSpinner />}
                    </View>
                </TouchableWithoutFeedback>
                {/* Body End */}
            </ScrollView>
        </PaperProvider>
    );
};

export default ResetPassword;
