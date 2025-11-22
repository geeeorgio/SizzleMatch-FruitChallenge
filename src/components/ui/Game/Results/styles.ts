import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: hp(33),
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
  winnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerImage: {
    width: '100%',
    height: '100%',
  },
  frameContainer: {
    width: '100%',
  },
  title: {
    fontSize: sp(22),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
    marginBottom: hp(20),
  },
  message: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    marginBottom: hp(20),
  },
  buttonsWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(22),
  },
  buttonContainer: {
    width: '40%',
    paddingVertical: hp(8),
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
});
