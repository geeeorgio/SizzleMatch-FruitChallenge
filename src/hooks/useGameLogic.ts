import { useFocusEffect } from '@react-navigation/native';
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
  selectSessionGameTime,
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
  updateBestTime,
} from 'src/redux/slices/gameplay/slice';
import { addResult } from 'src/redux/slices/results/slice';
import {
  selectIsSoundEnabled,
  selectIsVibrationEnabled,
} from 'src/redux/slices/settings/selectors';
import type { FruitItem, GameMode } from 'src/types';
import { renderFruitList } from 'src/utils/renderFruitList';
import {
  cleanupSounds,
  initSounds,
  playBgSound,
  playFailureSound,
  playSuccessSound,
  stopBgSound,
} from 'src/utils/sound';
import { triggerVibration } from 'src/utils/vibration';

export const useGameLogic = (gameMode: GameMode, sessionGameLevel: number) => {
  const dispatch = useAppDispatch();

  const gameItems = useMemo(
    () => renderFruitList(gameMode, sessionGameLevel),
    [gameMode, sessionGameLevel],
  );

  const [animatingCardIds, setAnimatingCardIds] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(true);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const addTimer = (timer: ReturnType<typeof setTimeout>) =>
    timersRef.current.push(timer);

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

  const gameTime = useAppSelector(selectSessionGameTime);
  const gameTimeRef = useRef(gameTime);

  useEffect(() => {
    gameTimeRef.current = gameTime;
  }, [gameTime]);

  useFocusEffect(
    useCallback(() => {
      if (isSoundEnabled) {
        initSounds(() => playBgSound(isSoundEnabled));
      }

      return () => {
        if (isSoundEnabled) {
          stopBgSound();
          cleanupSounds();
        }
      };
    }, [isSoundEnabled]),
  );

  useEffect(() => {
    setIsProcessing(true);
    const allCardIds = gameItems.map((item) => item.id);
    dispatch(setInitialCardReveal(allCardIds));

    const timer = setTimeout(() => {
      dispatch(clearInitialCardReveal());
      setIsProcessing(false);
    }, 1515);
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
        setAnimatingCardIds([card1Id, card2Id]);
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

        const currentMatchedCount = matchedCardIds.length + 2;
        const totalCards = gameItems.length;

        if (currentMatchedCount >= totalCards) {
          dispatch(incrementLevelWithoutMistakes());

          if (sessionGameLevel >= 5) {
            if (levelsWithoutMistakes + 1 >= 3 && !flawless3Completed) {
              dispatch(addCompletedAchievement({ id: 'flawless3' }));
            }
            if (gameMode === 'heat' && !heatClearCompleted) {
              dispatch(addCompletedAchievement({ id: 'heatClear' }));
            }

            const timeSpent = 100 - gameTimeRef.current;

            dispatch(
              addResult({
                level: sessionGameLevel,
                date: new Date().toISOString(),
                time: timeSpent,
                gameMode,
              }),
            );

            dispatch(updateBestTime({ mode: gameMode, time: timeSpent }));

            dispatch(setGameStatus('completed'));
          } else {
            const t = setTimeout(() => {
              setAnimatingCardIds([]);
              dispatch(setNextSessionGameLevel());
            }, 777);
            addTimer(t);
          }
        } else {
          const t = setTimeout(() => {
            setAnimatingCardIds([]);
            setIsProcessing(false);
          }, 1200);
          addTimer(t);
        }
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
        }, 777);
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
      matchedCardIds.length,
      sessionGameLevel,
      gameMode,
      levelsWithoutMistakes,
      flawless3Completed,
      heatClearCompleted,
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
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return {
    gameItems,
    flippedCardIds,
    matchedCardIds,
    onCardPress,
    animatingCardIds,
  };
};
