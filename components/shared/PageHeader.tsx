import { Href, Stack } from 'expo-router'
import React from 'react'
import { Colors } from "@/constants/Colors";
import { useColorScheme } from 'nativewind';
import LogoTitle from './LogoTitle';
import GoBack from './GoBack';

const PageHeader = ({ title, goBackUrl = "/signup" }: {title: string, goBackUrl: Href<string | object>}) => {
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Screen
        options={{
            title,
            headerStyle: { backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background },
            headerTintColor: colorScheme === "light" ? Colors.dark.background : Colors.light.background,
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: (props) => <GoBack route={goBackUrl} {...props} />,
        }}
    />
  )
}

export default PageHeader