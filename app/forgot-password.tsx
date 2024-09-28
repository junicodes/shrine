import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React, { useEffect, useState } from "react";
import { Image, Text, Keyboard, Pressable, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";
import { Stack } from "expo-router";
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
import IconApp from '../assets/images/fp_email.svg'
import SVGEmail from "@/components/svg/SVGEmail";
import SVGPhone from "@/components/svg/SVGPhone";

const ForgotPassword = () => {
  // Local States
  const [selected, setSelected ] = useState("email")
  const [isLoading, setIsLoading] = useState(false)
  const [counter, setCounter] = useState(59);
  const [token, setToken] = useState("")


  useEffect(() => {
    
    if(counter > 0) {
      const counter = setInterval(() => {
        setCounter((counter) => counter - 1)
      }, 1000);

      return () => { clearInterval(counter)};
    }

  }, [counter]);

  useEffect(() => {
    submitTokenRequest(token);
  }, [token])

  const submitTokenRequest = (token: string) => {

    if(!isNumeric(token)) return false;

    if(token.length >= 5) {
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
            <PageHeader title={"Forgot Password"} goBackUrl={"/signin"} />
            
            {/* Body Start */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View className="flex-1">
                    <ThemedView className="flex-1">
                        <FadeInView>  
                            <ThemedText type='title' className='text-left'>
                                Forgot Password
                            </ThemedText>
                            <ThemedText type='subtitle' className="mb-4">
                                Select verification method and we will send verification code
                            </ThemedText>
                            <View className={`flex flex-row space-x-3 p-4 border ${ selected === "email" ? 'border-[#761022]' : 'border-[#9CA3AF]' } my-2 items-center rounded-2xl`}>
                              <SVGEmail stroke={ selected === "email" ? "#761022" : "#9CA3AF"} />
                              <View>
                                <ThemedText className='text-left font-bold'>
                                  Email
                                </ThemedText>
                                <ThemedText type='subtitle'>
                                  Send to your email
                                </ThemedText>
                              </View>
                            </View>
                            <View className={`flex flex-row space-x-3 p-4 border ${ selected === "phone" ? 'border-[#761022]' : 'border-[#9CA3AF]' } my-2 items-center rounded-2xl`}>
                              <SVGPhone stroke={ selected === "phone" ? "#761022" : "#9CA3AF"} />
                              <View>
                                <ThemedText className='text-left font-bold'>
                                  Phone Number
                                </ThemedText>
                                <ThemedText type='subtitle'>
                                  Send to your phone number
                                </ThemedText>
                              </View>
                            </View>
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

export default ForgotPassword;
