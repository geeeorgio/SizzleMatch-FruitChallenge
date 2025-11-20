import type { ReactNode } from 'react';
import React from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

interface CustomButtonProps {
  children: ReactNode;
  handlePress?: () => void;
  isDisabled?: boolean;
  distance?: Insets;
  fullWidth?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  extraContainerStyle?: StyleProp<ViewStyle>;
  variant: 'yellow' | 'red' | 'green' | 'black';
}

const CustomButton = ({
  children,
  handlePress,
  isDisabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
  fullWidth = false,
  buttonStyle,
  extraContainerStyle,
  variant,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        buttonStyle,
        pressed && styles.btnPressed,
        fullWidth && { alignSelf: 'stretch' },
      ]}
      onPress={handlePress}
      disabled={isDisabled}
      hitSlop={distance}
    >
      <CustomContainer variant={variant} extraStyle={extraContainerStyle}>
        {children}
      </CustomContainer>
    </Pressable>
  );
};

export default CustomButton;
