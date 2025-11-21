import { Vibration } from 'react-native';

export const triggerVibration = (isEnabled: boolean) => {
  if (!isEnabled) return;
  Vibration.vibrate(200);
};
