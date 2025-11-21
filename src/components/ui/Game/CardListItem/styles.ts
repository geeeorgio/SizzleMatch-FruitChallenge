import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: wp(4),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  matched: {
    opacity: 0.6,
  },
});
