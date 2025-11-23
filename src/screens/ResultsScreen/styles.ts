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
    fontSize: sp(20),
    textAlign: 'center',
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: sp(20),
    textAlign: 'center',
    lineHeight: sp(26),
    maxWidth: '80%',
  },
  resultsContainer: {
    width: '100%',
    maxHeight: hp(333),
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(6),
    paddingHorizontal: wp(8),
  },
  colDate: {
    flex: 1,
    textAlign: 'left',
  },
  colMode: {
    flex: 1,
    textAlign: 'center',
  },
  colTime: {
    flex: 0.5,
    textAlign: 'right',
  },
  resultText: {
    fontSize: sp(16),
  },
  clearButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonContainer: {
    width: '100%',
    paddingVertical: hp(8),
  },
  clearButtonText: {
    fontSize: sp(16),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(22),
  },
  dialogContainer: {
    width: '100%',
  },
  dialogTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
    lineHeight: sp(26),
  },
  dialogMessage: {
    fontSize: sp(14),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    lineHeight: sp(24),
  },
  dialogButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dialogBtn: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogBtnContainer: {
    width: '100%',
    paddingVertical: hp(6),
  },
  dialogBtnText: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
  },
});
