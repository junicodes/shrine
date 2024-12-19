/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorActive = '#8F5FED';
const tintColorDark = '#761022';

export const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    svg: '#fff',
    tint: tintColorActive,
    icon: '#9CA3AF', //#687076
    tabIconDefault: '#687076',
    tabIconSelected: tintColorActive,
    tabBorder: "#fff"
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    svg: '#151718',
    tint: tintColorDark,
    icon: '#9CA3AF', // #9BA1A6
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tabBorder: "#151718"
  },
};
