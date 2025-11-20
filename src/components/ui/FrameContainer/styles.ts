import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageBackground: {
    width: '100%',
    aspectRatio: 1.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textWrapper: {
    width: '75%',
    alignItems: 'center',
    paddingBottom: hp(24),
  },
});
