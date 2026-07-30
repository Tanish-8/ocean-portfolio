import { SURFACE } from '../constants/depth';

export interface UseDepthResult {
  depth: number;
  maxDepth: number;
  normalizedDepth: number;
  setDepth: (depth: number) => void;
}

export const useDepth = (): UseDepthResult => {
  // Placeholder hook returning default depth state
  return {
    depth: SURFACE,
    maxDepth: 1000,
    normalizedDepth: 0,
    setDepth: () => {},
  };
};

export default useDepth;
