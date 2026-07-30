import { SCENES, SceneConfig } from '../../../constants/scenes';

/**
 * SceneManager Architecture Preparation
 * -------------------------------------
 * Responsible for managing scene registration, active scene state,
 * depth transitions, and dynamic scene loading based on the Scene Registry (`SCENES`).
 *
 * Designed to decouple page navigation sections from scene rendering layers.
 */

export interface SceneManagerState {
  currentScene: SceneConfig;
  targetDepth: number;
  currentDepth: number;
  isTransitioning: boolean;
}

export class SceneManager {
  private registry: SceneConfig[] = SCENES;

  /**
   * Retrieves the configured scenes from the scene registry.
   */
  public getScenes(): SceneConfig[] {
    return this.registry;
  }

  /**
   * Gets a scene by its unique ID.
   */
  public getSceneById(id: string): SceneConfig | undefined {
    return this.registry.find((scene) => scene.id === id);
  }

  /**
   * Gets a scene matching a given ocean depth value.
   */
  public getSceneAtDepth(depth: number): SceneConfig | undefined {
    return this.registry.find((scene) => scene.depth === depth);
  }
}
