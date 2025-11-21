import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  livesContainer: {
    flex: 0.45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp(5),
  },
  heartImage: {
    width: wp(25),
    height: hp(25),
  },
  timeContainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  timeText: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoBold,
  },
});
