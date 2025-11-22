import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Image, Modal, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomText,
  FrameContainer,
  WinnerAnimation,
} from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectSessionGameLevel,
  selectSessionGameTime,
} from 'src/redux/slices/gameplay/selectors';
import {
  resetGame,
  resetSessionGame,
  setGameStarted,
  setGameStatus,
  updateBestTime,
} from 'src/redux/slices/gameplay/slice';
import { addResult } from 'src/redux/slices/results/slice';
import { selectGameMode } from 'src/redux/slices/settings/selectors';
import type { MainStackNavigationProp } from 'src/types';

type ResultsScreenProps = {
  isVisible: boolean;
  gameStatus: 'completed' | 'failed';
};

const Results = ({ isVisible, gameStatus }: ResultsScreenProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const gameTime = useAppSelector(selectSessionGameTime);
  const gameLevel = useAppSelector(selectSessionGameLevel);
  const gameMode = useAppSelector(selectGameMode);

  const hasSavedRef = useRef(false);

  useEffect(() => {
    if (isVisible && !hasSavedRef.current) {
      hasSavedRef.current = true;

      const timeSpent = 100 - gameTime;

      dispatch(
        addResult({
          level: gameLevel,
          date: new Date().toISOString(),
          time: timeSpent,
          gameMode,
        }),
      );

      if (gameStatus === 'completed') {
        dispatch(updateBestTime({ mode: gameMode, time: timeSpent }));
      }
    }

    if (!isVisible) {
      hasSavedRef.current = false;
    }
  }, [isVisible, gameTime, gameLevel, gameMode, gameStatus, dispatch]);

  const timeSpent = 100 - gameTime;
  const title =
    gameStatus === 'completed'
      ? 'You did it! All pairs matched!'
      : 'Game over.';
  const message =
    gameStatus === 'completed'
      ? `Total Time: ${timeSpent} sec`
      : 'Time or lives ran out — try again!';

  const handleRestart = () => {
    dispatch(resetSessionGame());
    dispatch(setGameStarted(true));
    dispatch(setGameStatus('in-progress'));
  };

  const handleMenu = () => {
    dispatch(resetGame());
    navigation.navigate('HomeScreen');
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {gameStatus === 'completed' && (
            <View style={styles.winnerContainer}>
              <Image
                source={GAME_ITEMS.winnersCup}
                style={styles.winnerImage}
                resizeMode="contain"
              />
              <WinnerAnimation onEnd={() => {}} />
            </View>
          )}

          <FrameContainer extraStyle={styles.frameContainer}>
            <CustomText extraStyle={styles.title}>{title}</CustomText>
            <CustomText extraStyle={styles.message}>{message}</CustomText>
          </FrameContainer>

          <View style={styles.buttonsWrapper}>
            <CustomButton
              variant="yellow"
              handlePress={handleRestart}
              buttonStyle={styles.button}
              extraContainerStyle={styles.buttonContainer}
            >
              <CustomText extraStyle={styles.buttonText}>
                {gameStatus === 'completed' ? 'Play Again' : 'Restart'}
              </CustomText>
            </CustomButton>
            <CustomButton
              variant="yellow"
              handlePress={handleMenu}
              buttonStyle={styles.button}
              extraContainerStyle={styles.buttonContainer}
            >
              <CustomText extraStyle={styles.buttonText}>Menu</CustomText>
            </CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Results;
