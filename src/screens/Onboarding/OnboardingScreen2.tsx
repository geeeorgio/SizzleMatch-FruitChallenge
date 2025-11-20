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

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <Image
        source={GAME_ITEMS.onboarding3}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.bottomContentContainer}>
        <View style={styles.frameWrapper}>
          <FrameContainer>
            <CustomText extraStyle={styles.title}>
              Three Modes, Five Stages Each
            </CustomText>
            <CustomText extraStyle={styles.description}>
              Choose Easy, Classic, or Heat mode. Each level adds more cards and
              tests your memory deeper.
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
        <CustomText extraStyle={styles.btnText}>Next</CustomText>
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen2;
