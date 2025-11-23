import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import CorrectAnimation from '../../CustomAnimation/CorrectAnimation/CorrectAnimation';
import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';
import CardListItem from '../CardListItem/CardListItem';
import GameBar from '../GameBar/GameBar';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { useGameLogic } from 'src/hooks/useGameLogic';
import { selectSessionGameLevel } from 'src/redux/slices/gameplay/selectors';
import { setGamePaused } from 'src/redux/slices/gameplay/slice';
import { selectGameMode } from 'src/redux/slices/settings/selectors';
import { wp } from 'src/utils';

const MainGame = () => {
  const dispatch = useAppDispatch();
  const gameMode = useAppSelector(selectGameMode);
  const sessionGameLevel = useAppSelector(selectSessionGameLevel);

  const {
    gameItems,
    flippedCardIds,
    matchedCardIds,
    onCardPress,
    animatingCardIds,
  } = useGameLogic(gameMode, sessionGameLevel);

  const { width } = useWindowDimensions();
  const horizontalPadding = wp(3);
  const gap = wp(3);

  const cardCount = gameItems.length;

  const getColumns = (count: number) => {
    if (count <= 8) return 3;
    return 4;
  };

  const columns = getColumns(cardCount);

  const cardSize =
    (width - horizontalPadding * 2 - gap * (columns - 1)) / columns;

  const handleGamePause = () => {
    dispatch(setGamePaused());
  };

  return (
    <View style={styles.container}>
      <GameBar />

      <View style={styles.cardListContainer}>
        {gameItems.map((item) => (
          <View
            key={item.id}
            style={{
              width: cardSize,
              height: cardSize,
            }}
          >
            <CardListItem
              fruit={item}
              isFlipped={flippedCardIds.includes(item.id)}
              isMatched={matchedCardIds.includes(item.id)}
              onCardPress={onCardPress}
            />
            {animatingCardIds.includes(item.id) && (
              <CorrectAnimation onEnd={() => {}} />
            )}
          </View>
        ))}
      </View>

      <CustomButton
        buttonStyle={styles.menuButton}
        extraContainerStyle={styles.menuButtonContainer}
        variant="yellow"
        handlePress={handleGamePause}
      >
        <CustomText extraStyle={styles.menuButtonText}>Menu</CustomText>
      </CustomButton>
    </View>
  );
};

export default MainGame;
