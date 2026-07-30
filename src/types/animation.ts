export type EasingPresetName = 'easeDefault' | 'easeSmooth' | 'easeFloat';

export interface TransitionConfig {
  duration: number;
  delay?: number;
  ease: string | number[];
}

export interface ParallaxOptions {
  speed: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  sensitivity?: number;
}

export interface KeyframeConfig {
  [key: string]: string | number;
}
