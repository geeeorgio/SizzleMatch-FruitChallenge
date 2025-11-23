import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomScreenWrapper,
  CustomText,
  FrameContainer,
} from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <Image
        source={GAME_ITEMS.onboarding2}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.bottomContentContainer}>
        <FrameContainer extraStyle={styles.frameContainer}>
          <CustomText extraStyle={styles.title}>
            Watch the Time, Keep Your Lives
          </CustomText>
          <CustomText extraStyle={styles.description}>
            You have 100 seconds and 3 lives. Every mismatch costs one — stay
            focused till the end!
          </CustomText>
        </FrameContainer>
      </View>

      <CustomButton
        variant="yellow"
        handlePress={handleNext}
        buttonStyle={styles.btn}
        extraContainerStyle={styles.btnGradientContainer}
      >
        <CustomText extraStyle={styles.btnText}>Next</CustomText>
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen1;
