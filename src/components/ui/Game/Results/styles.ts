import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    width: '80%',
    padding: hp(16),
    gap: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: sp(20),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
  message: {
    fontSize: sp(16),
    fontFamily: FONTS.Montserrat,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
  },
  buttonText: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
});
