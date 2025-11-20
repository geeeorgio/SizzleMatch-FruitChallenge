import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomScreenWrapper, CustomText } from 'src/components';
import { FRUITS_BCKG, HOME_IMG } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handlePlay = () => {
    navigation.navigate('GameScreen');
  };

  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  const handleAchievements = () => {
    navigation.navigate('AchievementsScreen');
  };

  const handleGameResults = () => {
    navigation.navigate('ResultsScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <ImageBackground
        source={FRUITS_BCKG}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={HOME_IMG}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.buttonsContainer}>
            <CustomButton
              variant="yellow"
              handlePress={handlePlay}
              buttonStyle={styles.btn}
              extraContainerStyle={styles.btnGradientContainer}
            >
              <CustomText extraStyle={styles.btnText}>Play</CustomText>
            </CustomButton>

            <CustomButton
              variant="yellow"
              handlePress={handleSettings}
              buttonStyle={styles.btn}
              extraContainerStyle={styles.btnGradientContainer}
            >
              <CustomText extraStyle={styles.btnText}>Settings</CustomText>
            </CustomButton>
            <CustomButton
              variant="yellow"
              handlePress={handleAchievements}
              buttonStyle={styles.btn}
              extraContainerStyle={styles.btnGradientContainer}
            >
              <CustomText extraStyle={styles.btnText}>Achievements</CustomText>
            </CustomButton>
            <CustomButton
              variant="yellow"
              handlePress={handleGameResults}
              buttonStyle={styles.btn}
              extraContainerStyle={styles.btnGradientContainer}
            >
              <CustomText extraStyle={styles.btnText}>Game Results</CustomText>
            </CustomButton>
          </View>
        </View>
      </ImageBackground>
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
