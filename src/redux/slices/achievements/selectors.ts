import type { RootState } from 'src/redux/store';

export const selectAchievements = (state: RootState) =>
  state.achievements.achievements;

export const selectCompletedAchievements = (state: RootState) =>
  state.achievements.completedAchievements;

export const selectFlawless3Achievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'flawless3',
  );

export const selectLucky7Achievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'lucky7',
  );

export const selectHeatClearAchievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'heatClear',
  );

export const selectFruitCollectorAchievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'fruitCollector',
  );
