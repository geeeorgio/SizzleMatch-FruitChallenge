import { Share } from 'react-native';

const DEFAULT_TITLE = '';
const DEFAULT_MESSAGE = 'Check out this awesome app!';
const DEFAULT_URL = '';

export const handleShare = async (): Promise<void> => {
  try {
    const result = await Share.share({
      message: DEFAULT_MESSAGE,
      url: DEFAULT_URL,
      title: DEFAULT_TITLE,
    });

    if (result.action === Share.sharedAction) {
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Share Error:', error.message);
    } else {
      console.error('Unknown Share Error:', error);
    }
  }
};
