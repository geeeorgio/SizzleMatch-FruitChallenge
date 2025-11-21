import React from 'react';
import { Image, Pressable } from 'react-native';

import { styles } from './styles';

import { FRUITS, GAME_ITEMS } from 'src/constants';
import type { FruitItem } from 'src/types';

interface CardListItemProps {
  fruit: FruitItem;
  isFlipped: boolean;
  isMatched: boolean;
  onCardPress: (fruit: FruitItem) => void;
}

const CardListItem = ({
  fruit,
  isFlipped,
  isMatched,
  onCardPress,
}: CardListItemProps) => {
  const showFruit = isFlipped || isMatched;

  return (
    <Pressable
      style={[styles.button, isMatched && styles.matched]}
      onPress={() => !isMatched && !isFlipped && onCardPress(fruit)}
      disabled={isMatched || isFlipped}
    >
      {showFruit ? (
        <Image
          source={FRUITS[fruit.fruitName as keyof typeof FRUITS]}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={GAME_ITEMS.star}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </Pressable>
  );
};

export default CardListItem;
