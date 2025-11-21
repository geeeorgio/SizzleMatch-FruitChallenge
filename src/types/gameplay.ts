export type GameStatus =
  | 'pending'
  | 'paused'
  | 'in-progress'
  | 'completed'
  | 'failed';

export type GameMode = 'easy' | 'classic' | 'heat';

export type FruitItem = {
  id: string;
  fruitImage: string;
  fruitName: string;
};
