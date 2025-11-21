import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  dialogWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(22),
  },
  dialog: {
    width: '100%',
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
    lineHeight: sp(26),
    marginBottom: hp(18),
  },
  message: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    lineHeight: sp(24),
    marginBottom: hp(6),
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: hp(8),
  },
  btnText: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoBold,
  },
});
