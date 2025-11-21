import { createSlice } from '@reduxjs/toolkit';

import type { Achievement } from 'src/constants';
import { ACHIEVEMENTS } from 'src/constants';

interface AchievementsState {
  achievements: Achievement[];
  completedAchievements: Achievement[] | undefined;
}

const initialState: AchievementsState = {
  achievements: ACHIEVEMENTS,
  completedAchievements: [],
};

const slice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    addCompletedAchievement: (state, action) => {
      const achievement = state.achievements.find(
        (ach) => ach.id === action.payload.id,
      );
      if (achievement) {
        const newAchievement = { ...achievement, isCompleted: true };
        state.completedAchievements?.push(newAchievement);
      }
    },
    removeCompletedAchievement: (state, action) => {
      state.completedAchievements = state.completedAchievements?.filter(
        (achievement) => achievement.id !== action.payload.id,
      );
    },
    resetCompletedAchievements: (state) => {
      state.completedAchievements = [];
    },
    resetAchievements: (state) => {
      state.achievements = ACHIEVEMENTS;
      state.completedAchievements = [];
    },
  },
});

export const {
  addCompletedAchievement,
  removeCompletedAchievement,
  resetCompletedAchievements,
  resetAchievements,
} = slice.actions;

export const achievementsReducer = slice.reducer;
