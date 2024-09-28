
import { offlineImage } from '@/constants/images'
import React, { useEffect, useRef } from 'react'
import { Image, StyleSheet, View, Animated, Easing, Text } from 'react-native'

interface Props {
  durationMsSpin?: number
  durationMsFadeIn?: number
  durationMsFadeOut?: number
}

const TopImage = () => {
  return <Image className={`w-24 h-24`} source={offlineImage.appLogo} />;
};

const fadeOut = (durationMs: number, fadeAnim: Animated.Value): void => {
  Animated.loop(Animated.timing(fadeAnim, {
    toValue: 1,
    duration: durationMs,
    useNativeDriver: true,
  })).start()
}

const fadeIn = (durationMs: number, fadeAnim: Animated.Value): void => {
  Animated.loop(Animated.timing(fadeAnim, {
    toValue: 1,
    duration: durationMs,
    useNativeDriver: true,
  })).start()
}

const startRotationAnimation = (durationMs: number, rotationDegree: Animated.Value): void => {
  Animated.loop(Animated.timing(
    rotationDegree,
    {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true
    }
  )).start()
}

const LoadingSpinner = ({
  durationMsSpin = 1000,
  durationMsFadeIn = 5000,
  durationMsFadeOut = 3000

}: Props): JSX.Element => {
  const rotationDegree = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMsSpin, rotationDegree)
  }, [durationMsSpin, rotationDegree])

  useEffect(() => {
    fadeIn(durationMsFadeIn, fadeAnim);
  }, [durationMsFadeIn, fadeAnim])

  useEffect(() => {
    fadeOut(durationMsFadeOut, fadeAnim)
  }, [durationMsFadeOut, fadeAnim])

  return (
    <View style={styles.container} accessibilityRole='progressbar'>
      <Animated.View
        style={[{
          // transform: [{
          //   rotateZ: rotationDegree.interpolate({
          //     inputRange: [0, 360],
          //     outputRange: ['0deg', '360deg']
          //   })
          // }],
          opacity: fadeAnim
        }]}
      >
        <TopImage />
        <Text className='text-center py-1 text-white font-bold'>Loading...</Text>
      </Animated.View>
    </View>
  )
}



{/* <View style={styles.container} accessibilityRole='progressbar'>
<View style={[styles.background, { borderColor: color }]} />
<Animated.View
  style={[styles.progress, { borderTopColor: color }, {
    transform: [{
      rotateZ: rotationDegree.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
      })
    }]
  }]}
/>
</View> */}

const height = 24

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(52, 52, 52, 0.8)"
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: height / 2,
    borderWidth: 4,
    opacity: 0.25
  },
  progress: {
    width: '100%',
    height: '100%',
    borderRadius: height / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 4,
    position: 'absolute'
  }
})

export default LoadingSpinner