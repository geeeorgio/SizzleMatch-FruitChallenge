import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(18),
    paddingVertical: hp(18),
  },
  cardListContainer: {
    width: '100%',
  },
  menuButton: {
    width: '35%',
  },
  menuButtonContainer: {
    width: '100%',
    paddingVertical: hp(8),
  },
  menuButtonText: {
    fontSize: sp(16),
  },
  gameBar: {
    width: '100%',
    height: hp(100),
  },
});
