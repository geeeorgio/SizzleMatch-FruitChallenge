import React from 'react';
import { FlatList } from 'react-native';

import CardListItem from '../CardListItem/CardListItem';

import { styles } from './styles';

import type { FruitItem } from 'src/types';

interface CardListProps {
  gameItems: FruitItem[];
  flippedCardIds: string[];
  matchedCardIds: string[];
  onCardPress: (fruit: FruitItem) => void;
}

const CardList = ({
  gameItems,
  flippedCardIds,
  matchedCardIds,
  onCardPress,
}: CardListProps) => {
  return (
    <FlatList
      data={gameItems}
      contentContainerStyle={styles.contentContainer}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardListItem
          fruit={item}
          isFlipped={flippedCardIds.includes(item.id)}
          isMatched={matchedCardIds.includes(item.id)}
          onCardPress={onCardPress}
        />
      )}
    />
  );
};

export default CardList;
