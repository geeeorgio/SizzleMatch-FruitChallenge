import type { RootState } from 'src/redux/store';

export const selectIsSoundEnabled = (state: RootState) =>
  state.settings.isSoundEnabled;

export const selectIsVibrationEnabled = (state: RootState) =>
  state.settings.isVibrationEnabled;

export const selectGameMode = (state: RootState) => state.settings.gameMode;
