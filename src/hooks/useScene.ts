import { SCENES, SceneConfig } from '../constants/scenes';

export interface UseSceneResult {
  currentScene: SceneConfig;
  activeSceneId: string;
  isTransitioning: boolean;
  setScene: (id: string) => void;
}

export const useScene = (): UseSceneResult => {
  // Placeholder hook returning default scene state
  return {
    currentScene: SCENES[0],
    activeSceneId: SCENES[0].id,
    isTransitioning: false,
    setScene: () => {},
  };
};

export default useScene;
