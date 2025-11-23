import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1.48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
  },
  content: {
    width: '82%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(16),
  },
});
