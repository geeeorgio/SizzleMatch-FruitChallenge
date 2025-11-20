import { REWARDS } from './images';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  defaultReward: number;
  completedReward: number;
  isCompleted: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'flawless3',
    title: 'Flawless 3',
    description: 'Complete three levels in a row without mistakes.',
    defaultReward: REWARDS.flawless3Locked,
    completedReward: REWARDS.flawless3,
    isCompleted: false,
  },
  {
    id: 'lucky7',
    title: 'Lucky 7',
    description: 'Find seven matching pairs in a row.',
    defaultReward: REWARDS.lucky7Locked,
    completedReward: REWARDS.lucky7,
    isCompleted: false,
  },
  {
    id: 'heatClear',
    title: 'Heat Clear',
    description: 'Finish the fifth stage in Heat difficulty.',
    defaultReward: REWARDS.heatClearLocked,
    completedReward: REWARDS.heatClear,
    isCompleted: false,
  },
  {
    id: 'fruitCollector',
    title: 'Fruit Collector',
    description: 'Unlock all fruit types in the App.',
    defaultReward: REWARDS.fruitCollectorLocked,
    completedReward: REWARDS.fruitCollector,
    isCompleted: false,
  },
];
