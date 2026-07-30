export interface WaterProperties {
  clarity: number;
  causticsIntensity: number;
  waveSpeed: number;
  waveAmplitude: number;
  fogColor: string;
  fogDensity: number;
}

export interface AmbientLightProperties {
  color: string;
  intensity: number;
  sunRayAngle: number;
}

export interface CurrentForce {
  x: number;
  y: number;
  strength: number;
}

export interface OceanEnvironmentState {
  currentDepth: number;
  water: WaterProperties;
  lighting: AmbientLightProperties;
  current: CurrentForce;
}

export interface OceanContextState {
  environment: OceanEnvironmentState;
  setDepth: (depth: number) => void;
  updateEnvironment: (partial: Partial<OceanEnvironmentState>) => void;
}
