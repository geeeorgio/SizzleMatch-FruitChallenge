import type { RootState } from 'src/redux/store';

export const selectAchievements = (state: RootState) =>
  state.achievements.achievements;

export const selectFlawless3Achievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'flawless3',
  )?.isCompleted ?? false;

export const selectLucky7Achievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'lucky7',
  )?.isCompleted ?? false;

export const selectHeatClearAchievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'heatClear',
  )?.isCompleted ?? false;

export const selectFruitCollectorAchievement = (state: RootState) =>
  state.achievements.achievements.find(
    (achievement) => achievement.id === 'fruitCollector',
  )?.isCompleted ?? false;
