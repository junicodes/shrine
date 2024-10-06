import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { offlineImage, onlineImage } from '../constants/images';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';


const cacheImages = (images: any) => {

  return Object.keys(images).map((key: any) => {

    if (typeof images[key] === 'string') {
      return Image.prefetch(images[key]);
    } else {
      return Asset.fromModule(images[key]).downloadAsync();
    }
    
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
        //   'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        //   'raleway-thin': require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
        //   'raleway-regular': require('../assets/fonts/Raleway/static/Raleway-Regular.ttf'),
        //   'raleway-black': require('../assets/fonts/Raleway/static/Raleway-Black.ttf'),
        //   'raleway-semibold': require('../assets/fonts/Raleway/static/Raleway-SemiBold.ttf'),
        //   'raleway-bold': require('../assets/fonts/Raleway/static/Raleway-Bold.ttf'),
        });

        //Load and cache asset file before app 
        const imageAssets = cacheImages({...offlineImage, ...onlineImage});

        // Artificially delay for two seconds to simulate a slow loading experience.
        await Promise.all([...imageAssets]);
        
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}