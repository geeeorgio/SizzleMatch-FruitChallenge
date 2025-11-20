import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface ScreenWrapperProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomScreenWrapper = ({ children, extraStyle }: ScreenWrapperProps) => {
  return <View style={[styles.wrapper, extraStyle]}>{children}</View>;
};

export default CustomScreenWrapper;
