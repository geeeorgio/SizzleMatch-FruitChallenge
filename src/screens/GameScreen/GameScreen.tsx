import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  GameModal,
  GameSetup,
  MainGame,
  Results,
} from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectGameStatus,
  selectIsGamePaused,
  selectIsGameStarted,
  selectIsPlaying,
  selectSessionGameLevel,
} from 'src/redux/slices/gameplay/selectors';
import {
  resetGame,
  setGamePaused,
  setGameResumed,
} from 'src/redux/slices/gameplay/slice';
import { selectGameMode } from 'src/redux/slices/settings/selectors';
import type { MainStackNavigationProp } from 'src/types';

const GameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const isPlaying = useAppSelector(selectIsPlaying);
  const isGameStarted = useAppSelector(selectIsGameStarted);
  const gameStatus = useAppSelector(selectGameStatus);
  const isGamePaused = useAppSelector(selectIsGamePaused);
  const sessionGameLevel = useAppSelector(selectSessionGameLevel);
  const gameMode = useAppSelector(selectGameMode);

  const showResults = gameStatus === 'completed' || gameStatus === 'failed';

  const handleGamePause = () => {
    dispatch(setGamePaused());
  };

  const handleGameResume = () => {
    dispatch(setGameResumed());
  };

  const handleQuitGame = () => {
    dispatch(resetGame());
    navigation.navigate('HomeScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {!isGameStarted && <GameSetup />}

      {isPlaying && (
        <MainGame
          gameMode={gameMode}
          sessionGameLevel={sessionGameLevel}
          handleGamePause={handleGamePause}
        />
      )}

      {showResults && (
        <Results isVisible={showResults} gameStatus={gameStatus} />
      )}

      <GameModal
        isVisible={isGamePaused}
        onResume={handleGameResume}
        onQuitGame={handleQuitGame}
      />
    </CustomScreenWrapper>
  );
};

export default GameScreen;
