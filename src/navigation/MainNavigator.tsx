import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AchievementsScreen,
  GameScreen,
  HomeScreen,
  ResultsScreen,
  SettingsScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Main.Screen name="HomeScreen" component={HomeScreen} />
      <Main.Screen name="GameScreen" component={GameScreen} />
      <Main.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_left',
        }}
      />
      <Main.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_right',
        }}
      />
      <Main.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_bottom',
        }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
