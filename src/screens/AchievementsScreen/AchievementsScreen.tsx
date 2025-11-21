import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectCompletedAchievements } from 'src/redux/slices/achievements/selectors';
import type { MainStackNavigationProp } from 'src/types';

const AchievementsScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const completedAchievements = useAppSelector(selectCompletedAchievements);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <CustomContainer variant="yellow" extraStyle={styles.container}>
        <View style={styles.header}>
          <CustomText extraStyle={styles.title}>Achievements</CustomText>
          <Pressable onPress={handleBack}>
            <Image source={GAME_ITEMS.close} style={styles.backButton} />
          </Pressable>
        </View>

        <View style={styles.achievementsContainer}>
          {completedAchievements?.map((achievement) => {
            return (
              <View
                key={achievement.id}
                style={[
                  styles.achievementItem,
                  achievement.isCompleted && styles.achievementItemCompleted,
                ]}
              >
                <Image
                  source={
                    achievement.isCompleted
                      ? achievement.completedReward
                      : achievement.defaultReward
                  }
                  style={[
                    styles.achievementImage,
                    achievement.isCompleted && styles.achievementImageCompleted,
                  ]}
                  resizeMode="contain"
                />
                <View style={styles.achievementInfo}>
                  <CustomText
                    extraStyle={[
                      styles.achievementTitle,
                      achievement.isCompleted &&
                        styles.achievementTitleCompleted,
                    ]}
                  >
                    {achievement.title}
                  </CustomText>
                  <CustomText extraStyle={styles.achievementDescription}>
                    {achievement.description}
                  </CustomText>
                </View>
              </View>
            );
          })}
        </View>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default AchievementsScreen;
