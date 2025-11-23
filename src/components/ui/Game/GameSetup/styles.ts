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
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '60%',
    zIndex: -1,
    opacity: 0.85,
  },
  bottomContentContainer: {
    flex: 0.95,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  frameWrapper: {
    width: '100%',
  },
  title: {
    fontSize: sp(18),
    textAlign: 'center',
    fontFamily: FONTS.RobotoItalic,
    lineHeight: sp(24),
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(20),
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
