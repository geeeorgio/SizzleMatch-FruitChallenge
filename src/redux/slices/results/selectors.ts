import type { RootState } from 'src/redux/store';

export const selectResults = (state: RootState) => state.results.results;
