import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  HomeScreen: undefined;
  GameScreen: undefined;
  ResultsScreen: undefined;
  SettingsScreen: undefined;
  AchievementsScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
