import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Text } from 'react-native';

import { styles } from './styles';

interface CustomTextProps {
  extraStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

const CustomText = ({ extraStyle, children }: CustomTextProps) => {
  return <Text style={[styles.default, extraStyle]}>{children}</Text>;
};

export default CustomText;
