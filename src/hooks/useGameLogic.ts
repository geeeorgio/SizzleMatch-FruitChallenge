import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { FRUITS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectFlawless3Completed,
  selectFruitCollectorCompleted,
  selectHeatClearCompleted,
  selectLucky7Completed,
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
  setNextSessionGameLevel,
} from 'src/redux/slices/gameplay/slice';
import {
  selectIsSoundEnabled,
  selectIsVibrationEnabled,
} from 'src/redux/slices/settings/selectors';
import type { FruitItem, GameMode } from 'src/types';
import { renderFruitList } from 'src/utils/renderFruitList';
import { playFailureSound, playSuccessSound } from 'src/utils/sound';
import { triggerVibration } from 'src/utils/vibration';

export const useGameLogic = (gameMode: GameMode, sessionGameLevel: number) => {
  const dispatch = useAppDispatch();

  const gameItems = useMemo(
    () => renderFruitList(gameMode, sessionGameLevel),
    [gameMode, sessionGameLevel],
  );

  const [showMatchAnimation, setShowMatchAnimation] = useState(false);

  const [isProcessing, setIsProcessing] = useState(true);

  const timersRef = useRef<number[]>([]);
  const addTimer = (timer: number) => timersRef.current.push(timer);

  const flippedCardIds = useAppSelector(selectFlippedCardIds);
  const matchedCardIds = useAppSelector(selectMatchedCardIds);
  const selectedCardIds = useAppSelector(selectSelectedCardIds);
  const gameLives = useAppSelector(selectSessionGameLives);
  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const isVibrationEnabled = useAppSelector(selectIsVibrationEnabled);
  const consecutiveMatches = useAppSelector(selectConsecutiveMatches);
  const levelsWithoutMistakes = useAppSelector(selectLevelsWithoutMistakes);
  const unlockedFruits = useAppSelector(selectUnlockedFruits);

  const flawless3Completed = useAppSelector(selectFlawless3Completed);
  const lucky7Completed = useAppSelector(selectLucky7Completed);
  const heatClearCompleted = useAppSelector(selectHeatClearCompleted);
  const fruitCollectorCompleted = useAppSelector(selectFruitCollectorCompleted);

  useEffect(() => {
    setIsProcessing(true);
    const allCardIds = gameItems.map((item) => item.id);
    dispatch(setInitialCardReveal(allCardIds));

    const timer = setTimeout(() => {
      dispatch(clearInitialCardReveal());
      setIsProcessing(false);
    }, 1212);
    addTimer(timer);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [gameItems, dispatch]);

  const processMatch = useCallback(
    (card1Id: string, card2Id: string) => {
      const card1 = gameItems.find((item) => item.id === card1Id);
      const card2 = gameItems.find((item) => item.id === card2Id);

      if (!card1 || !card2) return;

      setIsProcessing(true);

      if (card1.fruitName === card2.fruitName) {
        setShowMatchAnimation(true);
        playSuccessSound(isSoundEnabled);

        dispatch(
          matchCards({
            cardIds: [card1Id, card2Id],
            fruitName: card1.fruitName,
          }),
        );

        if (consecutiveMatches + 1 >= 7 && !lucky7Completed) {
          dispatch(addCompletedAchievement({ id: 'lucky7' }));
        }

        const isNewFruit = !unlockedFruits.includes(card1.fruitName);
        if (
          unlockedFruits.length + (isNewFruit ? 1 : 0) >=
            Object.keys(FRUITS).length &&
          !fruitCollectorCompleted
        ) {
          dispatch(addCompletedAchievement({ id: 'fruitCollector' }));
        }

        const t = setTimeout(() => {
          setShowMatchAnimation(false);
          setIsProcessing(false);
        }, 1500);
        addTimer(t);
      } else {
        playFailureSound(isSoundEnabled);
        triggerVibration(isVibrationEnabled);
        dispatch(resetLevelWithoutMistakes());

        const t = setTimeout(() => {
          dispatch(mismatchCards());
          if (gameLives > 1) {
            dispatch(resetCardSelection());
            setIsProcessing(false);
          }
        }, 1000);
        addTimer(t);
      }
    },
    [
      dispatch,
      gameItems,
      isSoundEnabled,
      isVibrationEnabled,
      consecutiveMatches,
      unlockedFruits,
      lucky7Completed,
      fruitCollectorCompleted,
      gameLives,
    ],
  );

  const onCardPress = useCallback(
    (fruit: FruitItem) => {
      if (
        isProcessing ||
        flippedCardIds.includes(fruit.id) ||
        matchedCardIds.includes(fruit.id) ||
        selectedCardIds.includes(fruit.id) ||
        selectedCardIds.length >= 2
      ) {
        return;
      }
      dispatch(flipCard(fruit.id));
    },
    [isProcessing, flippedCardIds, matchedCardIds, selectedCardIds, dispatch],
  );

  useEffect(() => {
    if (selectedCardIds.length === 2 && !isProcessing) {
      const [id1, id2] = selectedCardIds;
      processMatch(id1, id2);
    }
  }, [selectedCardIds, isProcessing, processMatch]);

  useEffect(() => {
    const totalPairs = gameItems.length / 2;
    const matchedPairs = matchedCardIds.length / 2;

    if (matchedPairs > 0 && matchedPairs >= totalPairs) {
      if (isProcessing) return;

      setIsProcessing(true);
      dispatch(incrementLevelWithoutMistakes());

      if (sessionGameLevel >= 5) {
        if (levelsWithoutMistakes + 1 >= 3 && !flawless3Completed) {
          dispatch(addCompletedAchievement({ id: 'flawless3' }));
        }
        if (gameMode === 'heat' && !heatClearCompleted) {
          dispatch(addCompletedAchievement({ id: 'heatClear' }));
        }
        dispatch(setGameStatus('completed'));
      } else {
        const t = setTimeout(() => {
          dispatch(setNextSessionGameLevel());
        }, 500);
        addTimer(t);
      }
    }
  }, [
    matchedCardIds.length,
    gameItems.length,
    dispatch,
    levelsWithoutMistakes,
    flawless3Completed,
    heatClearCompleted,
    sessionGameLevel,
    gameMode,
    isProcessing,
  ]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return {
    gameItems,
    flippedCardIds,
    matchedCardIds,
    showMatchAnimation,
    onCardPress,
    setShowMatchAnimation,
  };
};
