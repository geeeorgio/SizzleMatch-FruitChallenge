import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackParamList } from './main';
import type { OnboardingStackParamList } from './onboarding';

export type RootStackParamList = {
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamList>;
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
