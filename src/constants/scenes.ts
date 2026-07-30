import React from 'react';
import {
  SURFACE,
  DIVE,
  REEF,
  TEMPLE,
  DEEP,
  SUBMARINE,
  ANCIENT_CITY,
  RETURN,
} from './depth';
import SurfaceScene from '@/scenes/Surface';
import DiveScene from '@/scenes/Dive';
import ReefScene from '@/scenes/Reef';
import TempleScene from '@/scenes/Temple';
import DeepOceanScene from '@/scenes/DeepOcean';
import SubmarineScene from '@/scenes/Submarine';
import AncientCityScene from '@/scenes/AncientCity';
import ReturnScene from '@/scenes/Return';

export interface SceneConfig {
  id: string;
  name: string;
  depth: number;
  component: React.ComponentType;
  navigationLabel: string;
}

export const SCENES: SceneConfig[] = [
  {
    id: 'surface',
    name: 'Surface',
    depth: SURFACE,
    component: SurfaceScene,
    navigationLabel: 'Home',
  },
  {
    id: 'dive',
    name: 'Dive',
    depth: DIVE,
    component: DiveScene,
    navigationLabel: 'About',
  },
  {
    id: 'reef',
    name: 'Reef',
    depth: REEF,
    component: ReefScene,
    navigationLabel: 'Skills',
  },
  {
    id: 'temple',
    name: 'Temple',
    depth: TEMPLE,
    component: TempleScene,
    navigationLabel: 'Projects',
  },
  {
    id: 'deep',
    name: 'Deep Ocean',
    depth: DEEP,
    component: DeepOceanScene,
    navigationLabel: 'Experience',
  },
  {
    id: 'submarine',
    name: 'Submarine',
    depth: SUBMARINE,
    component: SubmarineScene,
    navigationLabel: 'Achievements',
  },
  {
    id: 'ancient_city',
    name: 'Ancient City',
    depth: ANCIENT_CITY,
    component: AncientCityScene,
    navigationLabel: 'Contact',
  },
  {
    id: 'return',
    name: 'Return',
    depth: RETURN,
    component: ReturnScene,
    navigationLabel: 'Return',
  },
];
