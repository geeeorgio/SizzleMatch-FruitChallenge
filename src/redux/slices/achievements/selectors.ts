import type { RootState } from 'src/redux/store';

export const selectAchievements = (state: RootState) =>
  state.achievements.achievements;

export const selectFlawless3Completed = (state: RootState) =>
  state.achievements.achievements.find((a) => a.id === 'flawless3')
    ?.isCompleted ?? false;

export const selectLucky7Completed = (state: RootState) =>
  state.achievements.achievements.find((a) => a.id === 'lucky7')?.isCompleted ??
  false;

export const selectHeatClearCompleted = (state: RootState) =>
  state.achievements.achievements.find((a) => a.id === 'heatClear')
    ?.isCompleted ?? false;

export const selectFruitCollectorCompleted = (state: RootState) =>
  state.achievements.achievements.find((a) => a.id === 'fruitCollector')
    ?.isCompleted ?? false;
