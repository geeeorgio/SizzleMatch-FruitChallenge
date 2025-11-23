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

const OnboardingScreen0 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen1');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <Image
        source={GAME_ITEMS.onboarding1}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.bottomContentContainer}>
        <FrameContainer extraStyle={styles.frameContainer}>
          <CustomText extraStyle={styles.title}>Match the Fruits</CustomText>
          <CustomText extraStyle={styles.description}>
            Flip the cards, find matching fruits, and clear the board before
            time runs out.
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

export default OnboardingScreen0;
