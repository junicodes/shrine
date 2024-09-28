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


const VerifyCode = () => {
  // Local States
  const [isLoading, setIsLoading] = useState(false)
  const [counter, setCounter] = useState(59);
  const [token, setToken] = useState("")
  const [maskedEmail, setMaskedEmail] = useState("Okechukwu****@gmail.com");

  
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
            <PageHeader title={"Verify Code"} goBackUrl={"/forgot-password"} />
            
            {/* Body Start */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View className="flex-1">
                    <ThemedView className="flex-1">
                        <FadeInView>  
                            <ThemedText type='title' className='text-left'>
                                Verify Code
                            </ThemedText>
                            <ThemedText type='subtitle'>
                            Please enter the code we just sent to your mail&nbsp;
                            {maskedEmail}
                            </ThemedText>
                        
                            <TokenInput onHandleVerifyToken={(token) => setToken(token)} />
                            {
                                counter === 0 ?
                                <TouchableOpacity onPress={handleResendToken}>
                                    <Text className="text-center font-normal mt-8 underline">
                                        Resend verification token
                                    </Text>
                                </TouchableOpacity>
                                : 
                                <ThemedText className="text-center font-normal mt-8">
                                    Re-send code in <Text style={[ {color: "#7f1d1d"}]}>0:{counter}</Text>
                                </ThemedText>
                            }
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

export default VerifyCode;
