import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOnboardingCompleted: false,
};

const slice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setIsOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.isOnboardingCompleted = action.payload;
    },
  },
});

export const { setIsOnboardingCompleted } = slice.actions;

export const onboardingReducer = slice.reducer;
