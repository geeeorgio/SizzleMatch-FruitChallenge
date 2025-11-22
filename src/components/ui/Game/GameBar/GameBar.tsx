import React, { useEffect, useRef } from 'react';
import { Image, View } from 'react-native';

import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { GAME_ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectGameStatus,
  selectSessionGameLives,
  selectSessionGameTime,
} from 'src/redux/slices/gameplay/selectors';
import {
  setGameStatus,
  setSessionGameTime,
} from 'src/redux/slices/gameplay/slice';

const GameBar = () => {
  const dispatch = useAppDispatch();
  const sessionGameTime = useAppSelector(selectSessionGameTime);
  const sessionGameLives = useAppSelector(selectSessionGameLives);
  const gameStatus = useAppSelector(selectGameStatus);

  const startTimeRef = useRef<number | null>(null);
  const initialDurationRef = useRef<number>(sessionGameTime);

  useEffect(() => {
    if (gameStatus !== 'in-progress') {
      startTimeRef.current = null;
    } else {
      startTimeRef.current = Date.now();
      initialDurationRef.current = sessionGameTime;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus]);

  useEffect(() => {
    if (gameStatus !== 'in-progress') return;

    const timer = setInterval(() => {
      if (!startTimeRef.current) return;

      const now = Date.now();
      const elapsedSeconds = Math.floor((now - startTimeRef.current) / 1000);
      const remaining = Math.max(
        0,
        initialDurationRef.current - elapsedSeconds,
      );

      if (remaining !== sessionGameTime) {
        dispatch(setSessionGameTime(remaining));
      }

      if (remaining <= 0) {
        clearInterval(timer);
        dispatch(setGameStatus('failed'));
      }
    }, 250);

    return () => clearInterval(timer);
  }, [dispatch, gameStatus, sessionGameTime]);

  return (
    <View style={styles.container}>
      <View style={styles.livesContainer}>
        {Array.from({ length: sessionGameLives }).map((_, index) => (
          <Image
            source={GAME_ITEMS.heart}
            key={index}
            style={styles.heartImage}
            resizeMode="contain"
          />
        ))}
      </View>

      <View style={styles.timeContainer}>
        <CustomText extraStyle={styles.timeText}>{sessionGameTime}</CustomText>
      </View>
    </View>
  );
};

export default GameBar;
