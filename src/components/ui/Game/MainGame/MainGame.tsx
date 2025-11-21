import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import CorrectAnimation from '../../CustomAnimation/CorrectAnimation/CorrectAnimation';
import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';
import CardList from '../CardList/CardList';
import GameBar from '../GameBar/GameBar';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectFlawless3Achievement,
  selectFruitCollectorAchievement,
  selectHeatClearAchievement,
  selectLucky7Achievement,
} from 'src/redux/slices/achievements/selectors';
import { addCompletedAchievement } from 'src/redux/slices/achievements/slice';
import {
  selectConsecutiveMatches,
  selectFlippedCardIds,
  selectLevelsWithoutMistakes,
  selectMatchedCardIds,
  selectSelectedCardIds,
  selectSessionGameLives,
  selectUnlockedFruits,
} from 'src/redux/slices/gameplay/selectors';
import {
  clearInitialCardReveal,
  flipCard,
  incrementLevelWithoutMistakes,
  matchCards,
  mismatchCards,
  resetCardSelection,
  resetLevelWithoutMistakes,
  setGameStatus,
  setInitialCardReveal,
} from 'src/redux/slices/gameplay/slice';
import {
  selectIsSoundEnabled,
  selectIsVibrationEnabled,
} from 'src/redux/slices/settings/selectors';
import type { FruitItem, GameMode } from 'src/types';
import { renderFruitList } from 'src/utils/renderFruitList';
import { playFailureSound, playSuccessSound } from 'src/utils/sound';
import { triggerVibration } from 'src/utils/vibration';

interface GameModeProps {
  handleGamePause: () => void;
  gameMode: GameMode;
  sessionGameLevel: number;
}

const MainGame = ({
  handleGamePause,
  gameMode,
  sessionGameLevel,
}: GameModeProps) => {
  const dispatch = useAppDispatch();
  const gameItems = useRef(renderFruitList(gameMode, sessionGameLevel));
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);

  useEffect(() => {
    gameItems.current = renderFruitList(gameMode, sessionGameLevel);
  }, [gameMode, sessionGameLevel]);

  const flippedCardIds = useAppSelector(selectFlippedCardIds);
  const matchedCardIds = useAppSelector(selectMatchedCardIds);
  const selectedCardIds = useAppSelector(selectSelectedCardIds);
  const gameLives = useAppSelector(selectSessionGameLives);
  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const isVibrationEnabled = useAppSelector(selectIsVibrationEnabled);
  const consecutiveMatches = useAppSelector(selectConsecutiveMatches);
  const levelsWithoutMistakes = useAppSelector(selectLevelsWithoutMistakes);
  const unlockedFruits = useAppSelector(selectUnlockedFruits);

  const flawless3Achievement = useAppSelector(selectFlawless3Achievement);
  const lucky7Achievement = useAppSelector(selectLucky7Achievement);
  const heatClearAchievement = useAppSelector(selectHeatClearAchievement);
  const fruitCollectorAchievement = useAppSelector(
    selectFruitCollectorAchievement,
  );

  useEffect(() => {
    const allCardIds = gameItems.current.map((item) => item.id);
    dispatch(setInitialCardReveal(allCardIds));

    const timer = setTimeout(() => {
      dispatch(clearInitialCardReveal());
    }, 1111);

    return () => clearTimeout(timer);
  }, [dispatch, sessionGameLevel, gameMode]);

  useEffect(() => {
    if (selectedCardIds.length === 2) {
      const [firstId, secondId] = selectedCardIds;
      const firstCard = gameItems.current.find((item) => item.id === firstId);
      const secondCard = gameItems.current.find((item) => item.id === secondId);

      if (
        firstCard &&
        secondCard &&
        firstCard.fruitName === secondCard.fruitName
      ) {
        setShowMatchAnimation(true);
        playSuccessSound(isSoundEnabled);
        dispatch(
          matchCards({
            cardIds: [firstId, secondId],
            fruitName: firstCard.fruitName,
          }),
        );

        if (consecutiveMatches + 1 >= 7 && !lucky7Achievement) {
          dispatch(addCompletedAchievement({ id: 'lucky7' }));
        }

        const totalFruits = 8;
        if (
          unlockedFruits.length + 1 >= totalFruits &&
          !fruitCollectorAchievement
        ) {
          dispatch(addCompletedAchievement({ id: 'fruitCollector' }));
        }

        setTimeout(() => {
          setShowMatchAnimation(false);
        }, 1500);
      } else {
        dispatch(resetLevelWithoutMistakes());
        playFailureSound(isSoundEnabled);
        triggerVibration(isVibrationEnabled);
        dispatch(mismatchCards());

        if (gameLives <= 1) {
          setTimeout(() => {
            dispatch(setGameStatus('failed'));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(resetCardSelection());
          }, 1000);
        }
      }
    }
  }, [
    selectedCardIds,
    dispatch,
    isSoundEnabled,
    isVibrationEnabled,
    gameLives,
    consecutiveMatches,
    unlockedFruits.length,
    lucky7Achievement,
    fruitCollectorAchievement,
    flawless3Achievement,
    heatClearAchievement,
  ]);

  useEffect(() => {
    const totalPairs = gameItems.current.length / 2;
    const matchedPairs = matchedCardIds.length / 2;

    if (matchedPairs >= totalPairs && matchedPairs > 0) {
      dispatch(incrementLevelWithoutMistakes());

      if (levelsWithoutMistakes + 1 >= 3 && !flawless3Achievement) {
        dispatch(addCompletedAchievement({ id: 'flawless3' }));
      }

      if (
        sessionGameLevel === 5 &&
        gameMode === 'heat' &&
        !heatClearAchievement
      ) {
        dispatch(addCompletedAchievement({ id: 'heatClear' }));
      }

      dispatch(setGameStatus('completed'));
    }
  }, [
    matchedCardIds.length,
    dispatch,
    levelsWithoutMistakes,
    flawless3Achievement,
    heatClearAchievement,
    sessionGameLevel,
    gameMode,
  ]);

  const onCardPress = (fruit: FruitItem) => {
    if (
      selectedCardIds.length >= 2 ||
      matchedCardIds.includes(fruit.id) ||
      flippedCardIds.includes(fruit.id)
    ) {
      return;
    }

    dispatch(flipCard(fruit.id));
  };

  const handleAnimationEnd = () => {
    setShowMatchAnimation(false);
  };

  return (
    <View style={styles.container}>
      <GameBar />

      <View style={styles.cardListContainer}>
        <CardList
          gameItems={gameItems.current}
          flippedCardIds={flippedCardIds}
          matchedCardIds={matchedCardIds}
          onCardPress={onCardPress}
        />
      </View>

      {showMatchAnimation && <CorrectAnimation onEnd={handleAnimationEnd} />}

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
