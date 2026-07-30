import React from 'react';

export type SceneId =
  | 'surface'
  | 'dive'
  | 'reef'
  | 'temple'
  | 'deep'
  | 'submarine'
  | 'ancient_city'
  | 'return';

export interface SceneMeta {
  id: SceneId;
  name: string;
  depth: number;
  navigationLabel: string;
  component?: React.ComponentType;
}

export interface SceneTransitionState {
  fromSceneId: SceneId | null;
  toSceneId: SceneId;
  progress: number;
  isTransitioning: boolean;
}

export interface SceneContextState {
  currentScene: SceneMeta;
  activeSceneId: SceneId;
  transition: SceneTransitionState;
  setScene: (id: SceneId) => void;
}
