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
import { useAppDispatch } from 'src/hooks/toolkit';
import { setIsOnboardingCompleted } from 'src/redux/slices/onboarding/slice';

const OnboardingScreen3 = () => {
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(setIsOnboardingCompleted(true));
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <Image
        source={GAME_ITEMS.onboarding4}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.bottomContentContainer}>
        <View style={styles.frameWrapper}>
          <FrameContainer>
            <CustomText extraStyle={styles.title}>
              Play. Improve. Collect.
            </CustomText>
            <CustomText extraStyle={styles.description}>
              Earn achievements, track your results, and adjust sound,
              vibration, and difficulty anytime.
            </CustomText>
          </FrameContainer>
        </View>
      </View>

      <CustomButton
        variant="yellow"
        handlePress={handleNext}
        buttonStyle={styles.btn}
        extraContainerStyle={styles.btnGradientContainer}
      >
        <CustomText extraStyle={styles.btnText}>Play</CustomText>
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen3;
