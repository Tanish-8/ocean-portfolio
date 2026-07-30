export const COLORS = {
  ocean: {
    surface: '#00a8e8',
    shallow: '#0077b6',
    mid: '#023e8a',
    deep: '#03045e',
    abyss: '#010216',
  },
  accent: {
    seafoam: '#70e000',
    treasure: '#ffd166',
    coral: '#ff6b6b',
    warning: '#f77f00',
  },
  text: {
    primary: '#f8f9fa',
    secondary: '#adb5bd',
    muted: '#6c757d',
  },
  ui: {
    background: '#010216',
    surface: '#070f2b',
    card: '#1b1a55',
    border: '#535c91',
  },
} as const;

export type Colors = typeof COLORS;
