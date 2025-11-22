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
} from 'src/redux/slices/gameplay/selectors';
import { resetGame, setGameResumed } from 'src/redux/slices/gameplay/slice';
import type { MainStackNavigationProp } from 'src/types';

const GameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const isPlaying = useAppSelector(selectIsPlaying);
  const isGameStarted = useAppSelector(selectIsGameStarted);
  const gameStatus = useAppSelector(selectGameStatus);
  const isGamePaused = useAppSelector(selectIsGamePaused);

  const showResults = gameStatus === 'completed' || gameStatus === 'failed';

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

      {isPlaying && <MainGame />}

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
