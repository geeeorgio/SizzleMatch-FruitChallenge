import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { GameMode } from 'src/types';

export interface GameResult {
  level: number;
  date: string;
  time: number;
  gameMode: GameMode;
}

interface ResultsState {
  results: GameResult[];
}

const initialState: ResultsState = {
  results: [],
};

const MAX_RESULTS = 10;

const slice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<GameResult>) => {
      state.results.unshift(action.payload);

      if (state.results.length > MAX_RESULTS) {
        state.results = state.results.slice(0, MAX_RESULTS);
      }
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const { addResult, clearResults } = slice.actions;

export const resultsReducer = slice.reducer;
