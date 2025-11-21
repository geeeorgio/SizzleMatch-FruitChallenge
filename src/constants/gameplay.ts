import type { GameMode } from 'src/types';

export const LEVEL_CONFIG: Record<GameMode, Record<number, number>> = {
  easy: {
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
  },
  classic: {
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  heat: {
    1: 4,
    2: 5,
    3: 6,
    4: 7,
    5: 8,
  },
};
