import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Achievement } from 'src/constants';
import { ACHIEVEMENTS } from 'src/constants';

interface AchievementsState {
  achievements: Achievement[];
}

const initialState: AchievementsState = {
  achievements: ACHIEVEMENTS.map((ach) => ({ ...ach, isCompleted: false })),
};

const slice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    addCompletedAchievement: (state, action: PayloadAction<{ id: string }>) => {
      const achievement = state.achievements.find(
        (ach) => ach.id === action.payload.id,
      );
      if (achievement && !achievement.isCompleted) {
        achievement.isCompleted = true;
      }
    },
    resetAchievements: (state) => {
      state.achievements = ACHIEVEMENTS.map((ach) => ({
        ...ach,
        isCompleted: false,
      }));
    },
  },
});

export const { addCompletedAchievement, resetAchievements } = slice.actions;

export const achievementsReducer = slice.reducer;
