import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.7,
    width: '100%',
    maxHeight: hp(600),
    padding: hp(16),
  },
  closeWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
  closeButton: {
    width: wp(28),
    height: wp(28),
  },
  title: {
    fontSize: sp(22),
    textAlign: 'center',
    marginTop: hp(8),
    marginBottom: hp(22),
  },
  achievementsContainer: {
    flex: 1,
    width: '100%',
  },
  achievementsList: {
    paddingBottom: hp(16),
    gap: wp(16),
  },
  achievementsColumnWrapper: {
    justifyContent: 'space-between',
    gap: wp(16),
  },
  achievementItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: wp(6),
    borderRadius: wp(16),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  completedAchievementItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.33)',
  },
  achievementImage: {
    width: '100%',
    height: hp(120),
    marginBottom: hp(12),
  },
  achievementInfo: {
    alignItems: 'center',
    width: '100%',
  },
  achievementTitle: {
    fontSize: sp(15),
    marginBottom: hp(4),
    textAlign: 'center',
  },
  achievementDescription: {
    fontSize: sp(11),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    lineHeight: sp(16),
  },
});
