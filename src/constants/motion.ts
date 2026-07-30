/**
 * Motion System Architecture (`MOTION`)
 * -------------------------------------
 * Centralized motion tokens for Framer Motion transitions, spring physics,
 * easings, durations, and staggered sequence timings.
 *
 * Expected Usage:
 *   import { MOTION } from '@/constants/motion';
 *   <motion.div transition={{ duration: MOTION.duration.normal, ease: MOTION.easing.smooth }} />
 */

export const MOTION = {
  duration: {
    instant: 0,
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
    hero: 1.2,
    sceneTransition: 1.5,
    float: 3.0,
    drift: 6.0,
    wave: 10.0,
  },
  easing: {
    default: [0.4, 0, 0.2, 1] as const,
    smooth: [0.25, 0.1, 0.25, 1] as const,
    float: [0.45, 0, 0.55, 1] as const,
    outCubic: [0.33, 1, 0.68, 1] as const,
    inOutSine: [0.37, 0, 0.63, 1] as const,
  },
  spring: {
    gentle: { stiffness: 120, damping: 14, mass: 1 },
    bouncy: { stiffness: 200, damping: 10, mass: 0.8 },
    snappy: { stiffness: 300, damping: 20, mass: 0.5 },
    stiff: { stiffness: 400, damping: 30, mass: 1.2 },
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
} as const;

export type MotionSystem = typeof MOTION;
