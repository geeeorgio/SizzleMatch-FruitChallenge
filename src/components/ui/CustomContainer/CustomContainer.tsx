import type { ReactNode } from 'react';
import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  variant: 'yellow' | 'red' | 'green' | 'black';
  children?: ReactNode;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const getGradientColors = (variant: 'yellow' | 'red' | 'green' | 'black') => {
  switch (variant) {
    case 'yellow':
      return COLORS.yellowGradient;
    case 'red':
      return COLORS.redGradient;
    case 'green':
      return COLORS.greenGradient;
    case 'black':
      return COLORS.blackGradient;

    default:
      return [];
  }
};

const CustomContainer = ({
  extraStyle,
  variant,
  children,
  start,
  end,
}: CustomContainerProps) => {
  return (
    <LinearGradient
      colors={getGradientColors(variant)}
      start={start || { x: 0.5, y: 0 }}
      end={end || { x: 0.5, y: 1 }}
      style={[styles.container, extraStyle]}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
