import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: hp(40),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '66%',
    zIndex: -1,
    opacity: 0.85,
  },
  bottomContentContainer: {
    flex: 0.9,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  frameWrapper: {
    width: '100%',
  },
  title: {
    fontSize: sp(21),
    textAlign: 'center',
    marginBottom: hp(18),
  },
  description: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    lineHeight: sp(24),
  },
  btn: {
    width: '100%',
  },
  btnGradientContainer: {
    width: '35%',
    paddingVertical: hp(8),
    borderRadius: wp(36),
  },
  btnText: {
    fontSize: sp(18),
    textAlign: 'center',
  },
});
