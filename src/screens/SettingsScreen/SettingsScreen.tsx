import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectGameMode,
  selectIsSoundEnabled,
  selectIsVibrationEnabled,
} from 'src/redux/slices/settings/selectors';
import {
  setGameMode,
  setIsSoundEnabled,
  setIsVibrationEnabled,
} from 'src/redux/slices/settings/slice';
import type { GameMode, MainStackNavigationProp } from 'src/types';
import { handleShare } from 'src/utils/handleShare';

const MODES: GameMode[] = ['easy', 'classic', 'heat'];

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const isVibrationEnabled = useAppSelector(selectIsVibrationEnabled);
  const gameMode = useAppSelector(selectGameMode);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSoundToggle = () => {
    dispatch(setIsSoundEnabled(!isSoundEnabled));
  };

  const handleVibrationToggle = () => {
    dispatch(setIsVibrationEnabled(!isVibrationEnabled));
  };

  const handlePrevMode = () => {
    const currentIndex = MODES.indexOf(gameMode);
    const prevIndex = (currentIndex - 1 + MODES.length) % MODES.length;
    dispatch(setGameMode(MODES[prevIndex]));
  };

  const handleNextMode = () => {
    const currentIndex = MODES.indexOf(gameMode);
    const nextIndex = (currentIndex + 1) % MODES.length;
    dispatch(setGameMode(MODES[nextIndex]));
  };

  const handleShareApp = () => {
    handleShare();
  };

  const formatMode = (mode: string) => {
    return mode.charAt(0).toUpperCase() + mode.slice(1);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <CustomContainer variant="yellow" extraStyle={styles.container}>
        <Pressable
          onPress={handleBack}
          style={styles.closeWrapper}
          hitSlop={10}
        >
          <Image source={GAME_ITEMS.close} style={styles.closeButton} />
        </Pressable>

        <CustomText extraStyle={styles.title}>Settings</CustomText>

        <View style={styles.settingsContainer}>
          <View style={styles.settingRow}>
            <CustomText extraStyle={styles.settingLabel}>Sounds</CustomText>
            <Pressable onPress={handleSoundToggle}>
              <View
                style={[
                  styles.toggleTrack,
                  isSoundEnabled ? styles.trackOn : styles.trackOff,
                ]}
              >
                <View
                  style={[
                    styles.toggleKnob,
                    isSoundEnabled ? styles.knobOn : styles.knobOff,
                  ]}
                />
              </View>
            </Pressable>
          </View>

          <View style={styles.settingRow}>
            <CustomText extraStyle={styles.settingLabel}>Vibration</CustomText>
            <Pressable onPress={handleVibrationToggle}>
              <View
                style={[
                  styles.toggleTrack,
                  isVibrationEnabled ? styles.trackOn : styles.trackOff,
                ]}
              >
                <View
                  style={[
                    styles.toggleKnob,
                    isVibrationEnabled ? styles.knobOn : styles.knobOff,
                  ]}
                />
              </View>
            </Pressable>
          </View>

          <Pressable style={styles.settingRow} onPress={handleShareApp}>
            <CustomText extraStyle={styles.settingLabel}>Share App</CustomText>
            <Image
              source={GAME_ITEMS.share}
              style={styles.shareIcon}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <View style={styles.difficultySection}>
          <CustomText extraStyle={styles.difficultyTitle}>
            Difficulty
          </CustomText>
          <View style={styles.difficultySelector}>
            <Pressable onPress={handlePrevMode} style={styles.arrowButton}>
              <View style={styles.arrowCircle}>
                <Image source={GAME_ITEMS.prevPage} style={styles.arrowIcon} />
              </View>
            </Pressable>

            <CustomText extraStyle={styles.difficultyValue}>
              {formatMode(gameMode)}
            </CustomText>

            <Pressable onPress={handleNextMode} style={styles.arrowButton}>
              <View style={styles.arrowCircle}>
                <Image source={GAME_ITEMS.nextPage} style={styles.arrowIcon} />
              </View>
            </Pressable>
          </View>
        </View>

        <CustomButton
          variant="yellow"
          handlePress={handleBack}
          buttonStyle={styles.saveButton}
          extraContainerStyle={styles.saveButtonContainer}
        >
          <CustomText extraStyle={styles.saveButtonText}>Save</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default SettingsScreen;
