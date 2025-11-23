import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let successSound: Sound | null = null;
let failureSound: Sound | null = null;
let bgSound: Sound | null = null;
let inited = false;

export const initSounds = (onBgLoad?: () => void) => {
  if (inited) return;

  inited = true;

  successSound = new Sound('success.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('success sound load error', e);
      return;
    } else successSound?.setVolume(0.2);
  });

  failureSound = new Sound('loss.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('failure sound load error', e);
      return;
    } else failureSound?.setVolume(0.1);
  });

  bgSound = new Sound('music.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('bg sound load error', e);
      return;
    }
    bgSound?.setNumberOfLoops(-1);
    bgSound?.setVolume(0.15);

    if (onBgLoad) {
      onBgLoad();
    }
  });
};

export const playSuccessSound = (isEnabled: boolean) => {
  if (!isEnabled || !successSound) return;

  if (!successSound) {
    console.log('success sound not ready');
    return;
  }

  successSound.stop();
  successSound.setCurrentTime(1);
  successSound.play((success) => {
    if (!success) {
      console.log('Failed to play success sound');
    }
  });
};

export const playFailureSound = (isEnabled: boolean) => {
  if (!isEnabled || !failureSound) return;

  if (!failureSound) {
    console.log('failure sound not ready');
    return;
  }

  failureSound.stop();
  failureSound.setCurrentTime(0);
  failureSound.play((success) => {
    if (!success) {
      console.log('Failed to play failure sound');
    }
  });
};

export const playBgSound = (isEnabled: boolean) => {
  if (!isEnabled || !bgSound) return;

  if (bgSound.isPlaying()) return;

  bgSound?.play((success) => {
    if (!success) {
      console.log('bg playback failed');
    }
  });
};

export const stopBgSound = () => {
  if (!bgSound) return;
  bgSound.stop();
};

export const cleanupSounds = () => {
  bgSound?.stop();

  successSound?.release();
  failureSound?.release();
  bgSound?.release();

  successSound = null;
  failureSound = null;
  bgSound = null;
  inited = false;
};
