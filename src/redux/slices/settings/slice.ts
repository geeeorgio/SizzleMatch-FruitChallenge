import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { GameMode } from 'src/types';

interface SettingsState {
  isSoundEnabled: boolean;
  isVibrationEnabled: boolean;
  gameMode: GameMode;
}

const initialState: SettingsState = {
  isSoundEnabled: true,
  isVibrationEnabled: true,
  gameMode: 'classic',
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gameMode = action.payload;
    },
    setIsSoundEnabled: (state, action: PayloadAction<boolean>) => {
      state.isSoundEnabled = action.payload;
    },
    setIsVibrationEnabled: (state, action: PayloadAction<boolean>) => {
      state.isVibrationEnabled = action.payload;
    },
    resetSettings: () => {
      return { ...initialState };
    },
  },
});

export const {
  setGameMode,
  setIsSoundEnabled,
  setIsVibrationEnabled,
  resetSettings,
} = slice.actions;
export const settingsReducer = slice.reducer;
