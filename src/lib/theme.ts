import { COLORS } from '../constants/colors';
import { ANIMATION_DURATIONS, EASING_PRESETS } from '../constants/animations';

export const getOceanColor = (key: keyof typeof COLORS.ocean): string => {
  return COLORS.ocean[key];
};

export const getAccentColor = (key: keyof typeof COLORS.accent): string => {
  return COLORS.accent[key];
};

export const getAnimationDuration = (key: keyof typeof ANIMATION_DURATIONS): number => {
  return ANIMATION_DURATIONS[key];
};

export const getEasingPreset = (key: keyof typeof EASING_PRESETS): string => {
  return EASING_PRESETS[key];
};

export const themeHelpers = {
  getOceanColor,
  getAccentColor,
  getAnimationDuration,
  getEasingPreset,
} as const;

export default themeHelpers;
