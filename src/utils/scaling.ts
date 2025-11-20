import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const BASE_WIDTH = 375;
const scale = width / BASE_WIDTH;

export const wp = (size: number) => Math.round(scale * size);
export const hp = (size: number) => Math.round(scale * size);
export const sp = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(scale * size));
