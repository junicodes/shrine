import { Image, TouchableOpacity, useColorScheme } from 'react-native';
import React from 'react';
import { offlineImage } from '@/constants/images';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

export default function SocialAuth({social, buttonText}: {social: string, buttonText: string}) {

    //Hooks
    let colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark'

    const triggerGoogleAuth = async () => {
        console.log("google auth");
    }

    const images = {
        google: offlineImage.google
    } as any

  return (
    <>
     <TouchableOpacity onPress={triggerGoogleAuth}>
        <ThemedView className={`w-full border rounded-xl h-14 space-x-2.5 border-[#E5E5E5] my-5 flex flex-row justify-center items-center`}>
            <Image
                className={`w-6 h-6`}
                source={images[social]}
            />
            <ThemedText type='subtitle' className='h-6 font-semibold' style={[{ color: isDark ? 'white' : '#111827'}]}>
                {buttonText}
            </ThemedText>
        </ThemedView>
     </TouchableOpacity>
    </>
  );
}
