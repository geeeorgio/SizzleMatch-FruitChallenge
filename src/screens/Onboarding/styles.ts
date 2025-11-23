import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: hp(33),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: hp(33),
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '66%',
    zIndex: -1,
    opacity: 0.8,
  },
  bottomContentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: hp(24),
  },
  frameContainer: {
    width: '100%',
  },
  title: {
    fontSize: sp(16),
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    lineHeight: sp(22),
  },
  btn: {
    width: '100%',
  },
  btnGradientContainer: {
    width: '40%',
    paddingVertical: hp(8),
    borderRadius: wp(36),
  },
  btnText: {
    fontSize: sp(16),
    textAlign: 'center',
  },
});
