import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectAchievements } from 'src/redux/slices/achievements/selectors';
import type { MainStackNavigationProp } from 'src/types';

const AchievementsScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const achievements = useAppSelector(selectAchievements);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <CustomContainer variant="yellow" extraStyle={styles.container}>
        <Pressable style={styles.closeWrapper} onPress={handleBack}>
          <Image
            source={GAME_ITEMS.close}
            style={styles.closeButton}
            resizeMode="contain"
          />
        </Pressable>

        <CustomText extraStyle={styles.title}>Achievements</CustomText>

        <View style={styles.achievementsContainer}>
          <FlatList
            data={achievements}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.achievementsList}
            numColumns={2}
            columnWrapperStyle={styles.achievementsColumnWrapper}
            renderItem={({ item }) => {
              const isCompleted = item.isCompleted;
              const iconSource = isCompleted
                ? item.completedReward
                : item.defaultReward;

              return (
                <View style={styles.achievementItem}>
                  <Image
                    source={iconSource}
                    resizeMode="contain"
                    style={styles.achievementImage}
                  />
                  <View style={styles.achievementInfo}>
                    <CustomText extraStyle={styles.achievementTitle}>
                      {item.title}
                    </CustomText>
                    <CustomText extraStyle={styles.achievementDescription}>
                      {item.description}
                    </CustomText>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default AchievementsScreen;
