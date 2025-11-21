import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { ANIMATION } from 'src/constants';

interface CorrectAnimationProps {
  onEnd: () => void;
}

const CorrectAnimation = ({ onEnd }: CorrectAnimationProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={ANIMATION.correct}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={styles.lottie}
        onAnimationFinish={onEnd}
      />
    </View>
  );
};

export default CorrectAnimation;
