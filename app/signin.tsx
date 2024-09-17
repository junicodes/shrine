import { ThemedView } from "@/components/ThemedView";
import { offlineImage } from "@/constants/images";
import React from "react";
import { Image, Keyboard, Pressable, ScrollView, TouchableWithoutFeedback } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { Colors } from "@/constants/Colors";
import { router } from 'expo-router';
import FadeInView from "@/components/animations/FadeInView";
import { ThemedText } from "@/components/ThemedText";
import SocialAuth from "@/components/auth/SocialAuth";
import FormSignIn from "@/components/auth/FormSignIn";
import GoBack from "@/components/shared/GoBack";


const LogoTitle = (props: any) => {
  return <Image className={`w-22 h-8`} source={offlineImage.headerLogo} />;
};

const Signin = () => {
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
                    headerLeft: (props) => <GoBack route={"/signup"} {...props} />,
                }}
            />
            {/* Header End */}
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
