export type GameMode = 'easy' | 'classic' | 'heat';
export type GameStatus =
  | 'pending'
  | 'paused'
  | 'in-progress'
  | 'completed'
  | 'failed';

export type SessionGame = {
  gameLevel: number;
  gameTime: number;
  gameLives: number;
};

export type CardState = {
  flippedCardIds: string[];
  matchedCardIds: string[];
  selectedCardIds: string[];
  consecutiveMatches: number;
  levelsWithoutMistakes: number;
  unlockedFruits: string[];
};

export type BestTimes = {
  easy: number;
  classic: number;
  heat: number;
};

export interface FruitItem {
  id: string;
  fruitImage: any;
  fruitName: string;
}
