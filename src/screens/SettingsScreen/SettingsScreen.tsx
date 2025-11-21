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

  const handleDifficultyChange = (mode: GameMode) => {
    dispatch(setGameMode(mode));
  };

  const handleShareApp = () => {
    handleShare();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <CustomContainer variant="yellow" extraStyle={styles.container}>
        <View style={styles.header}>
          <CustomText extraStyle={styles.title}>Settings</CustomText>
          <Pressable onPress={handleBack}>
            <Image source={GAME_ITEMS.close} style={styles.backButton} />
          </Pressable>
        </View>

        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <View style={styles.settingRow}>
              <CustomText extraStyle={styles.settingLabel}>Sounds</CustomText>
              <Pressable
                style={[styles.toggle, isSoundEnabled && styles.toggleActive]}
                onPress={handleSoundToggle}
              >
                <CustomText
                  extraStyle={[
                    styles.toggleText,
                    isSoundEnabled && styles.toggleTextActive,
                  ]}
                >
                  {isSoundEnabled ? 'On' : 'Off'}
                </CustomText>
              </Pressable>
            </View>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingRow}>
              <CustomText extraStyle={styles.settingLabel}>
                Vibration
              </CustomText>
              <Pressable
                style={[
                  styles.toggle,
                  isVibrationEnabled && styles.toggleActive,
                ]}
                onPress={handleVibrationToggle}
              >
                <CustomText
                  extraStyle={[
                    styles.toggleText,
                    isVibrationEnabled && styles.toggleTextActive,
                  ]}
                >
                  {isVibrationEnabled ? 'On' : 'Off'}
                </CustomText>
              </Pressable>
            </View>
          </View>

          <View style={styles.settingItem}>
            <Pressable style={styles.shareRow} onPress={handleShareApp}>
              <CustomText extraStyle={styles.settingLabel}>
                Share App
              </CustomText>
              <Image
                source={GAME_ITEMS.share}
                style={styles.shareIcon}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.settingItem}>
          <CustomText extraStyle={styles.settingLabel}>
            Difficulty level
          </CustomText>
          <View style={styles.difficultyContainer}>
            {(['easy', 'classic', 'heat'] as GameMode[]).map((mode) => (
              <Pressable
                key={mode}
                style={[
                  styles.difficultyButton,
                  gameMode === mode && styles.difficultyButtonActive,
                ]}
                onPress={() => handleDifficultyChange(mode)}
              >
                <CustomText
                  extraStyle={[
                    styles.difficultyText,
                    gameMode === mode && styles.difficultyTextActive,
                  ]}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </CustomText>
              </Pressable>
            ))}
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
