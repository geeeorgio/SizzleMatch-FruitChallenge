import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { FRAME_BCKG } from 'src/constants';

interface FrameContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const FrameContainer = ({ children, extraStyle }: FrameContainerProps) => {
  return (
    <View style={[styles.wrapper, extraStyle]}>
      <ImageBackground
        source={FRAME_BCKG}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.content}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default FrameContainer;
