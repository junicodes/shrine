import { Href, Stack } from 'expo-router'
import React from 'react'
import { Colors } from "@/constants/Colors";
import { useColorScheme } from 'nativewind';
import LogoTitle from './LogoTitle';
import GoBack from './GoBack';
import { ThemedText } from '../ThemedText';

const PageHeader = ({ title, headerShown= true, goBackUrl }: {title: string, headerShown?: boolean, goBackUrl?: Href<string | object>}) => {
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Screen
        options={{
            title,
            headerShown,
            headerBackVisible: false,
            headerStyle: { backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background },
            headerTintColor: colorScheme === "light" ? Colors.dark.background : Colors.light.background,
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerTitle: (props) => title ? <ThemedText>{title}</ThemedText> : <LogoTitle {...props} />,
            headerLeft: (props) => goBackUrl ? <GoBack route={goBackUrl} {...props} /> : null,
        }}
    />
  )
}

export default PageHeader