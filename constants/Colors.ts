/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryColor = '#2567E8';
const secondaryColor = '#4B3FE0';
const backgroundLight = '#FFFFFF';
const backgroundDark = '#151718';
const textLight = '#11181C';
const textDark = '#FFFFFF';
const neutralGray = '#9BA1A6';
const cardBackground = '#E9EEFF';

export const Colors = {
  light: {
    text: textLight,
    background: backgroundLight,
    primary: primaryColor,
    secondary: secondaryColor,
    icon: neutralGray,
    card: cardBackground,
    tabIconDefault: neutralGray,
    tabIconSelected: primaryColor,
  },
  dark: {
    text: textDark,
    background: backgroundDark,
    primary: primaryColor,
    secondary: secondaryColor,
    icon: neutralGray,
    card: '#1E1E1E',
    tabIconDefault: neutralGray,
    tabIconSelected: textDark,
  },
};
