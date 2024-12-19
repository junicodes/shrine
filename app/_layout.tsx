import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="forgot-password" />
        <Stack.Screen name="verify-code" />
        <Stack.Screen name="reset-password" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="create-community" options={{ headerShown: false }} />
        <Stack.Screen name='thePeople' options={{ headerShown: false }} />
        <Stack.Screen name='singlePage' options={{ headerShown: false }} />
        <Stack.Screen name='settings' options={{ headerShown: false }} />
        <Stack.Screen name='account' options={{ headerShown: false }} />
        <Stack.Screen name='checkout' options={{ headerShown: false }} />
        <Stack.Screen name='details' options={{ headerShown: false }} />
        <Stack.Screen name='sellerProfile' options={{ headerShown: false }} />
        <Stack.Screen name='event-details' options={{ headerShown: false }} />
        <Stack.Screen name='book-event' options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
