import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen0,
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const Onboarding = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Onboarding.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Onboarding.Screen
        name="OnboardingScreen0"
        component={OnboardingScreen0}
      />
      <Onboarding.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <Onboarding.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <Onboarding.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
    </Onboarding.Navigator>
  );
};

export default OnboardingNavigator;
