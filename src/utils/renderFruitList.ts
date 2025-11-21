import { FRUITS, LEVEL_CONFIG } from 'src/constants';
import type { GameMode } from 'src/types/gameplay';

const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const renderFruitList = (gameMode: GameMode, level: number) => {
  const modeSettings = LEVEL_CONFIG[gameMode];

  const pairsCount = modeSettings[level] || modeSettings[5];

  const availableFruits = Object.entries(FRUITS).map(([name, img]) => ({
    name,
    img,
  }));

  const selectedFruits = shuffleArray(availableFruits).slice(0, pairsCount);

  const gameItems = selectedFruits.flatMap((item) => {
    return [
      {
        id: `${item.name}-1-${Math.random().toString(36)}`,
        fruitImage: item.img,
        fruitName: item.name,
      },
      {
        id: `${item.name}-2-${Math.random().toString(36)}`,
        fruitImage: item.img,
        fruitName: item.name,
      },
    ];
  });

  return shuffleArray(gameItems);
};
