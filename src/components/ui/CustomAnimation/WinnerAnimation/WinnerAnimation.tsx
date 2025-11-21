import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { ANIMATION } from 'src/constants';

interface WinnerAnimationProps {
  onEnd: () => void;
}

const WinnerAnimation = ({ onEnd }: WinnerAnimationProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={ANIMATION.winner}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={styles.lottie}
        onAnimationFinish={onEnd}
      />
    </View>
  );
};

export default WinnerAnimation;
