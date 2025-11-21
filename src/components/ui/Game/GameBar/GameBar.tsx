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
  const timeRef = useRef(sessionGameTime);

  useEffect(() => {
    timeRef.current = sessionGameTime;
  }, [sessionGameTime]);

  useEffect(() => {
    if (gameStatus !== 'in-progress') {
      return;
    }

    if (timeRef.current <= 0) {
      dispatch(setSessionGameTime(0));
      dispatch(setGameStatus('failed'));
      return;
    }

    const timer = setInterval(() => {
      const newTime = timeRef.current - 1;
      timeRef.current = newTime;
      dispatch(setSessionGameTime(newTime));

      if (newTime <= 0) {
        dispatch(setGameStatus('failed'));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, gameStatus]);

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
