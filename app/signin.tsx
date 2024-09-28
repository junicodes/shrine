import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React from "react";
import { Image, Keyboard, Pressable, ScrollView, TouchableWithoutFeedback } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "nativewind";
import FadeInView from "@/components/animations/FadeInView";
import { ThemedText } from "@/components/ThemedText";
import SocialAuth from "@/components/auth/SocialAuth";
import FormSignIn from "@/components/auth/FormSignIn";
import PageHeader from "@/components/shared/PageHeader";

const Signin = () => {

  return (
    <PaperProvider>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            {/* Header Start */}
            <PageHeader title={"Sign in"} goBackUrl={"/signup"} />
            
            {/* Body Start */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ThemedView className="flex-1">
                    <FadeInView>
                        <ThemedText type='title' className='text-left'>
                            Welcome Back!
                        </ThemedText>
                        <ThemedText type='subtitle'>
                            Sign In to your account
                        </ThemedText>
                        <SocialAuth social={"google"} buttonText={"Sign up with Google"} />
                        <Image
                            className={`w-full`}
                            source={offlineImage.orDivide}
                        />
                        <FormSignIn />
                    </FadeInView>
                </ThemedView>
            </TouchableWithoutFeedback>
            {/* Body End */}
        </ScrollView>
    </PaperProvider>
  );
};

export default Signin;
