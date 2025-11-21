import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let successSound: Sound | null = null;
let failureSound: Sound | null = null;

export const initSounds = () => {
  successSound = new Sound(
    require('../assets/sound/success.mp3'),
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('Failed to load success sound', error);
      }
    },
  );

  failureSound = new Sound(
    require('../assets/sound/loss.mp3'),
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('Failed to load failure sound', error);
      }
    },
  );
};

export const playSuccessSound = (isEnabled: boolean) => {
  if (!isEnabled || !successSound) return;
  successSound.stop();
  successSound.play((success) => {
    if (!success) {
      console.log('Failed to play success sound');
    }
  });
};

export const playFailureSound = (isEnabled: boolean) => {
  if (!isEnabled || !failureSound) return;
  failureSound.stop();
  failureSound.play((success) => {
    if (!success) {
      console.log('Failed to play failure sound');
    }
  });
};

export const cleanupSounds = () => {
  if (successSound) {
    successSound.release();
    successSound = null;
  }
  if (failureSound) {
    failureSound.release();
    failureSound = null;
  }
};
