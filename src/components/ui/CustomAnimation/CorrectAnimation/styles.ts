import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  lottie: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
});
