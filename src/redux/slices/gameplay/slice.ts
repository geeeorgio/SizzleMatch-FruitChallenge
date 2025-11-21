import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { GameStatus } from 'src/types';

interface GameplayState {
  isGameStarted: boolean;
  gameStatus: GameStatus;
  totalGameScore: number;
  totalGameProgress: number;
  sessionGame: {
    gameLevel: number;
    gameTime: number;
    gameLives: number;
    gameScore: number;
    gameProgress: number;
  };
  cardState: {
    flippedCardIds: string[];
    matchedCardIds: string[];
    selectedCardIds: string[];
    consecutiveMatches: number;
    levelsWithoutMistakes: number;
    unlockedFruits: string[];
  };
}

const initialState: GameplayState = {
  isGameStarted: false,
  gameStatus: 'pending',
  totalGameScore: 0,
  totalGameProgress: 0,
  sessionGame: {
    gameLevel: 1,
    gameTime: 100,
    gameLives: 3,
    gameScore: 0,
    gameProgress: 0.0,
  },
  cardState: {
    flippedCardIds: [],
    matchedCardIds: [],
    selectedCardIds: [],
    consecutiveMatches: 0,
    levelsWithoutMistakes: 0,
    unlockedFruits: [],
  },
};

const slice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    setGameStarted: (state, action: PayloadAction<boolean>) => {
      state.isGameStarted = action.payload;
    },
    setTotalGameScore: (state, action: PayloadAction<number>) => {
      state.totalGameScore = action.payload;
    },
    setTotalGameProgress: (state, action: PayloadAction<number>) => {
      state.totalGameProgress = action.payload;
    },
    setSessionGameLevel: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameLevel = action.payload;
    },
    setSessionGameTime: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameTime = action.payload;
    },
    setSessionGameLives: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameLives = action.payload;
    },
    setSessionGameScore: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameScore = action.payload;
    },
    setSessionGameProgress: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameProgress = action.payload;
    },
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload;
    },
    setGamePaused: (state) => {
      state.gameStatus = 'paused';
    },
    setGameResumed: (state) => {
      state.gameStatus = 'in-progress';
    },
    resetSessionGame: (state) => {
      state.sessionGame.gameLevel = 1;
      state.sessionGame.gameTime = 100;
      state.sessionGame.gameLives = 3;
      state.sessionGame.gameScore = 0;
      state.sessionGame.gameProgress = 0;
      state.cardState = {
        flippedCardIds: [],
        matchedCardIds: [],
        selectedCardIds: [],
        consecutiveMatches: 0,
        levelsWithoutMistakes: 0,
        unlockedFruits: [],
      };
    },
    flipCard: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      if (
        !state.cardState.flippedCardIds.includes(cardId) &&
        !state.cardState.matchedCardIds.includes(cardId) &&
        state.cardState.selectedCardIds.length < 2
      ) {
        state.cardState.flippedCardIds.push(cardId);
        state.cardState.selectedCardIds.push(cardId);
      }
    },
    matchCards: (
      state,
      action: PayloadAction<{ cardIds: string[]; fruitName: string }>,
    ) => {
      const { cardIds, fruitName } = action.payload;

      state.cardState.matchedCardIds.push(...cardIds);

      state.cardState.selectedCardIds = [];

      state.cardState.flippedCardIds = state.cardState.flippedCardIds.filter(
        (id) => !cardIds.includes(id),
      );
      state.cardState.consecutiveMatches += 1;
      if (!state.cardState.unlockedFruits.includes(fruitName)) {
        state.cardState.unlockedFruits.push(fruitName);
      }

      const totalPairs = state.cardState.matchedCardIds.length / 2;
      state.sessionGame.gameProgress = totalPairs;
    },
    mismatchCards: (state) => {
      const selectedIds = [...state.cardState.selectedCardIds];
      state.cardState.selectedCardIds = [];

      state.cardState.flippedCardIds = state.cardState.flippedCardIds.filter(
        (id) => !selectedIds.includes(id),
      );
      state.cardState.consecutiveMatches = 0;
      state.sessionGame.gameLives = Math.max(
        0,
        state.sessionGame.gameLives - 1,
      );
    },
    resetCardSelection: (state) => {
      state.cardState.selectedCardIds = [];
    },
    setInitialCardReveal: (state, action: PayloadAction<string[]>) => {
      state.cardState.flippedCardIds = action.payload;
    },
    clearInitialCardReveal: (state) => {
      state.cardState.flippedCardIds = state.cardState.flippedCardIds.filter(
        (id) => state.cardState.matchedCardIds.includes(id),
      );
    },
    incrementLevelWithoutMistakes: (state) => {
      state.cardState.levelsWithoutMistakes += 1;
    },
    resetLevelWithoutMistakes: (state) => {
      state.cardState.levelsWithoutMistakes = 0;
    },
    resetGame: () => {
      return { ...initialState };
    },
  },
});

export const {
  setGameStarted,
  setSessionGameLevel,
  setTotalGameScore,
  setTotalGameProgress,
  setSessionGameTime,
  setSessionGameLives,
  setSessionGameScore,
  setSessionGameProgress,
  setGameStatus,
  setGamePaused,
  setGameResumed,
  resetSessionGame,
  flipCard,
  matchCards,
  mismatchCards,
  resetCardSelection,
  setInitialCardReveal,
  clearInitialCardReveal,
  incrementLevelWithoutMistakes,
  resetLevelWithoutMistakes,
  resetGame,
} = slice.actions;

export const gameplayReducer = slice.reducer;
