import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type {
  CardState,
  GameMode,
  GameStatus,
  SessionGame,
  BestTimes,
} from 'src/types';

interface GameplayState {
  isGameStarted: boolean;
  gameStatus: GameStatus;
  bestTimes: BestTimes;
  sessionGame: SessionGame;
  cardState: CardState;
}

const initialBestTimes: BestTimes = {
  easy: 0,
  classic: 0,
  heat: 0,
};

const initialSessionGame: SessionGame = {
  gameLevel: 1,
  gameTime: 100,
  gameLives: 3,
};

const initialCardState: CardState = {
  flippedCardIds: [],
  matchedCardIds: [],
  selectedCardIds: [],
  consecutiveMatches: 0,
  levelsWithoutMistakes: 0,
  unlockedFruits: [],
};

const initialState: GameplayState = {
  isGameStarted: false,
  gameStatus: 'pending',
  bestTimes: initialBestTimes,
  sessionGame: initialSessionGame,
  cardState: initialCardState,
};

const slice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    setGameStarted: (state, action: PayloadAction<boolean>) => {
      state.isGameStarted = action.payload;
      console.log('setGameStarted', state.isGameStarted);
    },

    updateBestTime: (
      state,
      action: PayloadAction<{ mode: GameMode; time: number }>,
    ) => {
      const { mode, time } = action.payload;
      const currentBest = state.bestTimes[mode];
      console.log('updateBestTime', currentBest);
      console.log('updateBestTime', time);

      if (currentBest === 0 || time < currentBest) {
        state.bestTimes[mode] = time;
      }
    },

    setNextSessionGameLevel: (state) => {
      const currentLevel = state.sessionGame.gameLevel;
      console.log('setNextSessionGameLevel', currentLevel);

      if (currentLevel >= 5) {
        state.gameStatus = 'completed';
        console.log('setNextSessionGameLevel', state.gameStatus);
        return;
      }

      state.sessionGame.gameLevel = currentLevel + 1;

      console.log('setNextSessionGameLevel', state.sessionGame.gameLevel);

      state.cardState.flippedCardIds = [];
      state.cardState.matchedCardIds = [];
      state.cardState.selectedCardIds = [];
    },
    setSessionGameTime: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameTime = action.payload;
    },
    setSessionGameLives: (state, action: PayloadAction<number>) => {
      state.sessionGame.gameLives = action.payload;
    },
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload;
      console.log('setGameStatus', state.gameStatus);
    },
    setGamePaused: (state) => {
      state.gameStatus = 'paused';
      console.log('setGamePaused', state.gameStatus);
    },
    setGameResumed: (state) => {
      state.gameStatus = 'in-progress';
      console.log('setGameResumed', state.gameStatus);
    },

    resetSessionGame: (state) => {
      state.sessionGame = { ...initialSessionGame };
      console.log('resetSessionGame', state.sessionGame);

      const savedFruits = state.cardState.unlockedFruits;

      console.log('resetSessionGame', savedFruits);

      state.cardState = {
        ...initialCardState,
        unlockedFruits: savedFruits,
      };

      console.log('resetSessionGame', state.cardState);

      state.gameStatus = 'pending';

      console.log('resetSessionGame', state.gameStatus);
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
    },
    mismatchCards: (state) => {
      const selectedIds = [...state.cardState.selectedCardIds];
      state.cardState.selectedCardIds = [];

      state.cardState.flippedCardIds = state.cardState.flippedCardIds.filter(
        (id) => !selectedIds.includes(id),
      );
      state.cardState.consecutiveMatches = 0;

      if (state.sessionGame.gameLives > 0) {
        state.sessionGame.gameLives -= 1;
      }

      if (state.sessionGame.gameLives <= 0) {
        state.gameStatus = 'failed';
      }
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
  updateBestTime,
  setSessionGameTime,
  setSessionGameLives,
  setGameStatus,
  setGamePaused,
  setGameResumed,
  setNextSessionGameLevel,
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
