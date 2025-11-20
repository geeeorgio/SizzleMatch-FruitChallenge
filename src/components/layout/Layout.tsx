import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { MAIN_BACKGROUND } from 'src/constants';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Layout;
