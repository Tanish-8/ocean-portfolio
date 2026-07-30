export const ANIMATION_DURATIONS = {
  instant: 0,
  fast: 200,
  medium: 500,
  slow: 800,
  float: 3000,
  drift: 6000,
  wave: 10000,
} as const;

export const EASING_PRESETS = {
  easeDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeSmooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeFloat: 'cubic-bezier(0.45, 0, 0.55, 1)',
} as const;

export type AnimationDuration = keyof typeof ANIMATION_DURATIONS;
export type EasingPreset = keyof typeof EASING_PRESETS;
