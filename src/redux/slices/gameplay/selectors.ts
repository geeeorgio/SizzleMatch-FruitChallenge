import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'src/redux/store';

export const selectIsGameStarted = (state: RootState) =>
  state.gameplay.isGameStarted;

export const selectSessionGameLevel = (state: RootState) =>
  state.gameplay.sessionGame.gameLevel;

export const selectSessionGameTime = (state: RootState) =>
  state.gameplay.sessionGame.gameTime;

export const selectSessionGameLives = (state: RootState) =>
  state.gameplay.sessionGame.gameLives;

export const selectSessionGameScore = (state: RootState) =>
  state.gameplay.sessionGame.gameScore;

export const selectSessionGameProgress = (state: RootState) =>
  state.gameplay.sessionGame.gameProgress;

export const selectTotalGameScore = (state: RootState) =>
  state.gameplay.totalGameScore;

export const selectTotalGameProgress = (state: RootState) =>
  state.gameplay.totalGameProgress;

export const selectGameStatus = (state: RootState) => state.gameplay.gameStatus;

export const selectIsGamePaused = (state: RootState) =>
  state.gameplay.gameStatus === 'paused';

export const selectIsPlaying = createSelector(
  [selectIsGameStarted, selectGameStatus],
  (isGameStarted, gameStatus) => isGameStarted && gameStatus !== 'pending',
);

export const selectFlippedCardIds = (state: RootState) =>
  state.gameplay.cardState.flippedCardIds;

export const selectMatchedCardIds = (state: RootState) =>
  state.gameplay.cardState.matchedCardIds;

export const selectSelectedCardIds = (state: RootState) =>
  state.gameplay.cardState.selectedCardIds;

export const selectConsecutiveMatches = (state: RootState) =>
  state.gameplay.cardState.consecutiveMatches;

export const selectLevelsWithoutMistakes = (state: RootState) =>
  state.gameplay.cardState.levelsWithoutMistakes;

export const selectUnlockedFruits = (state: RootState) =>
  state.gameplay.cardState.unlockedFruits;
