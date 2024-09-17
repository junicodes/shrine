import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React from "react";
import { Image, Keyboard, Pressable, ScrollView, TouchableWithoutFeedback } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { Colors } from "@/constants/Colors";
import { router } from 'expo-router';
import FadeInView from "@/components/animations/FadeInView";
import { ThemedText } from "@/components/ThemedText";
import SocialAuth from "@/components/auth/SocialAuth";
import FormSignUp from "@/components/auth/FormSignUp";
import GoBack from "@/components/shared/GoBack";
import LogoTitle from "@/components/shared/LogoTitle";

const Signup = () => {
  const { colorScheme } = useColorScheme();

  return (
    <PaperProvider>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >

            {/* Header Start */}
            <Stack.Screen
                options={{
                  title: "Login",
                  headerStyle: { backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background },
                  headerTintColor: colorScheme === "light" ? Colors.dark.background : Colors.light.background,
                  headerTitleStyle: {
                      fontWeight: "bold",
                  },
                  headerShadowVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                  headerLeft: (props) => <GoBack route={"/signin"} {...props} />,
                }}
            />
            {/* Header End */}

            {/* Body Start */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ThemedView className="flex-1">
                    <FadeInView>
                        <ThemedText type='title' className='text-left'>
                          Sign Up
                        </ThemedText>
                        <ThemedText type='subtitle'>
                          Create account and enjoy all services
                        </ThemedText>
                        <SocialAuth social={"google"} buttonText={"Sign up with Google"} />
                        <Image
                          className={`w-full`}
                          source={offlineImage.orDivide}
                        />
                        <FormSignUp />
                    </FadeInView>
                </ThemedView>
            </TouchableWithoutFeedback>
            {/* Body End */}
        </ScrollView>
    </PaperProvider>
  );
};

export default Signup;
