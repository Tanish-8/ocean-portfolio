import { MOTION } from './motion';

/**
 * Legacy Animation Tokens
 * -----------------------
 * Maintained for backward compatibility.
 * Re-exports milliseconds derived from the unified `MOTION` system (`@/constants/motion`).
 */

export const ANIMATION_DURATIONS = {
  instant: MOTION.duration.instant * 1000,
  fast: MOTION.duration.fast * 1000,
  medium: MOTION.duration.normal * 1000,
  slow: MOTION.duration.slow * 1000,
  float: MOTION.duration.float * 1000,
  drift: MOTION.duration.drift * 1000,
  wave: MOTION.duration.wave * 1000,
} as const;

export const EASING_PRESETS = {
  easeDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeSmooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeFloat: 'cubic-bezier(0.45, 0, 0.55, 1)',
} as const;

export type AnimationDuration = keyof typeof ANIMATION_DURATIONS;
export type EasingPreset = keyof typeof EASING_PRESETS;
