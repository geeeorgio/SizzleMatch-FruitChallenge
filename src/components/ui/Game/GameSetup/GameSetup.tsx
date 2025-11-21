import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomScreenWrapper from '../../CustomScreenWrapper/CustomScreenWrapper';
import CustomText from '../../CustomText/CustomText';
import FrameContainer from '../../FrameContainer/FrameContainer';

import { styles } from './styles';

import { GAME_ITEMS } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { setGameStarted, setGameStatus } from 'src/redux/slices/gameplay/slice';
import type { MainStackNavigationProp } from 'src/types';

const GameSetup = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleMenu = () => {
    navigation.navigate('HomeScreen');
  };

  const handleNext = () => {
    dispatch(setGameStarted(true));
    dispatch(setGameStatus('in-progress'));
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <Image
        source={GAME_ITEMS.onboarding1}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.bottomContentContainer}>
        <View style={styles.frameWrapper}>
          <FrameContainer>
            <CustomText extraStyle={styles.title}>
              Match the fruits, test your focus, and beat the timer in this fast
              and glowing memory challenge.
            </CustomText>
          </FrameContainer>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          variant="yellow"
          handlePress={handleNext}
          buttonStyle={styles.btn}
          extraContainerStyle={styles.btnGradientContainer}
        >
          <CustomText extraStyle={styles.btnText}>Start</CustomText>
        </CustomButton>
        <CustomButton
          variant="yellow"
          handlePress={handleMenu}
          buttonStyle={styles.btn}
          extraContainerStyle={styles.btnGradientContainer}
        >
          <CustomText extraStyle={styles.btnText}>Menu</CustomText>
        </CustomButton>
      </View>
    </CustomScreenWrapper>
  );
};

export default GameSetup;
