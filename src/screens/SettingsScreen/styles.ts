import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.6,
    maxHeight: hp(600),
    width: '100%',
    padding: wp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  closeButton: {
    width: wp(28),
    height: wp(28),
  },
  title: {
    fontSize: sp(22),
    textAlign: 'center',
  },
  settingsContainer: {
    width: '100%',
    gap: hp(20),
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  settingLabel: {
    fontSize: sp(20),
  },
  shareIcon: {
    width: wp(48),
    height: hp(24),
  },
  toggleTrack: {
    width: wp(48),
    height: hp(24),
    borderRadius: hp(14),
    justifyContent: 'center',
    padding: wp(2),
  },
  trackOn: {
    backgroundColor: COLORS.white,
  },
  trackOff: {
    backgroundColor: COLORS.gray,
  },
  toggleKnob: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(9),
  },
  knobOn: {
    backgroundColor: COLORS.yellow,
    alignSelf: 'flex-end',
    marginLeft: wp(2),
  },
  knobOff: {
    backgroundColor: COLORS.yellow,
    alignSelf: 'flex-start',
    marginLeft: wp(2),
  },

  difficultySection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  difficultyTitle: {
    fontSize: sp(20),
    marginBottom: hp(20),
  },
  difficultySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
  },
  difficultyValue: {
    fontSize: sp(18),
    textAlign: 'center',
    minWidth: wp(70),
  },
  arrowButton: {
    padding: hp(6),
  },
  arrowCircle: {
    width: wp(28),
    height: wp(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: '100%',
    height: '100%',
  },
  saveButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonContainer: {
    width: '100%',
    paddingVertical: hp(8),
  },
  saveButtonText: {
    fontSize: sp(18),
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
