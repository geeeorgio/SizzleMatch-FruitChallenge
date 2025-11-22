import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(12),
    paddingTop: hp(12),
    paddingBottom: hp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardListContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: wp(12),
    rowGap: wp(12),
  },
  menuButton: {
    width: '40%',
  },
  menuButtonContainer: {
    width: '100%',
    paddingVertical: hp(10),
  },
  menuButtonText: {
    fontSize: sp(16),
  },
});
