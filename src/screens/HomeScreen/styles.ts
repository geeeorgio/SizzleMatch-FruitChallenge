import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    flex: 0.45,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    flex: 0.55,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(24),
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGradientContainer: {
    width: '100%',
    paddingVertical: hp(12),
    borderRadius: wp(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: sp(20),
    textAlign: 'center',
  },
});
