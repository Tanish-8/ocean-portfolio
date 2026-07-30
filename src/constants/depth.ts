export const SURFACE = 0;
export const DIVE = 25;
export const REEF = 80;
export const TEMPLE = 180;
export const DEEP = 350;
export const SUBMARINE = 600;
export const ANCIENT_CITY = 900;
export const RETURN = 1000;

export const DEPTHS = {
  SURFACE,
  DIVE,
  REEF,
  TEMPLE,
  DEEP,
  SUBMARINE,
  ANCIENT_CITY,
  RETURN,
} as const;

export interface SceneDepthMapping {
  scene: string;
  depth: number;
}

export const SceneDepth: SceneDepthMapping[] = [
  { scene: 'surface', depth: SURFACE },
  { scene: 'dive', depth: DIVE },
  { scene: 'reef', depth: REEF },
  { scene: 'temple', depth: TEMPLE },
  { scene: 'deep', depth: DEEP },
  { scene: 'submarine', depth: SUBMARINE },
  { scene: 'ancient_city', depth: ANCIENT_CITY },
  { scene: 'return', depth: RETURN },
];
