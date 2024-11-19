import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View className='w-full px-4 py-5 flex-1' style={[{ backgroundColor }, style]} {...otherProps} />;
}


// type FadeInViewProps = PropsWithChildren<{style?: ViewStyle}>;

// const FadeInView: React.FC<FadeInViewProps> = props => {
//   const fadeAnim = useAnimatedValue(0); // Initial value for opacity: 0

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim, // Bind opacity to animated value
//       }}>
//       {props.children}
//     </Animated.View>
//   );
// };